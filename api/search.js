// Minimal RAG search with Anthropic Claude
// No external vector DB - just keyword matching for relevant chunks

const CHUNKS = [
  // Jiuzhaigou chunks
  {
    id: 'jzg-what',
    guide: 'jiuzhaigou',
    keywords: ['what', 'jiuzhaigou', 'about', 'unesco', 'sichuan', 'lakes', 'when', 'visit', 'best time', 'avoid'],
    content: `Jiuzhaigou is a UNESCO World Heritage site in Sichuan. Insane turquoise lakes, waterfalls, Tibetan villages. Best time: Sept-Oct (fall colors) or June-Aug (summer). Avoid Chinese national holidays - Golden Week (Oct 1-7) is the worst, crowds will ruin it.`
  },
  {
    id: 'jzg-transport',
    guide: 'jiuzhaigou',
    keywords: ['get', 'there', 'bus', 'flight', 'chengdu', 'transport', 'how', 'travel', 'car'],
    content: `Getting to Jiuzhaigou from Chengdu: Bus is 8-10 hours, ¥150, from Chadianzi station - bumpy, bring motion sickness pills. Flight is 50 min to Jiuzhai Huanglong Airport then 2hr bus. Private car ¥400-600, 7-8 hours.`
  },
  {
    id: 'jzg-itinerary',
    guide: 'jiuzhaigou',
    keywords: ['itinerary', 'days', 'plan', 'schedule', 'do', 'see', 'valley', 'lake'],
    content: `3-day itinerary: Day 1 - arrive, do Rize Valley (Five Flower Lake is insane), Tibetan dinner ¥40-60. Day 2 - early 7am start, Zechawa Valley (Long Lake, Five Colored Pool), then Shuzheng Valley (Nuorilang Falls). Walk between stops, buses are crowded. Day 3 - revisit favorites, leave afternoon.`
  },
  {
    id: 'jzg-stay',
    guide: 'jiuzhaigou',
    keywords: ['stay', 'hotel', 'hostel', 'sleep', 'accommodation', 'where', 'zhangzha'],
    content: `Stay in Zhangzha Town outside the park. Budget: ¥60-100/night at hostels (Jiuzhai Self-Tour Youth Hostel is good, hot water works). Mid-range: ¥200-400. There's a Sheraton if you want comfort but why tho.`
  },
  {
    id: 'jzg-cost',
    guide: 'jiuzhaigou',
    keywords: ['cost', 'price', 'money', 'budget', 'cheap', 'expensive', 'yuan', 'rmb', 'total'],
    content: `Jiuzhaigou costs for 3 days per person: Park entrance ¥169, shuttle ¥90, accommodation ¥180 (3 nights hostel), food ¥200, bus roundtrip ¥300, misc ¥100. TOTAL: ~¥1,000 (~$140 USD). Can do cheaper if you try hard.`
  },
  {
    id: 'jzg-bring',
    guide: 'jiuzhaigou',
    keywords: ['bring', 'pack', 'what', 'need', 'prepare', 'clothes', 'gear'],
    content: `Bring to Jiuzhaigou: Layers (cold morning 10°C, warm afternoon 20°C+), sunscreen (altitude burns fast), snacks + water (expensive in park), cash (some places don't take cards), motion sickness pills for bus, comfortable shoes (15-20km walking per day).`
  },
  {
    id: 'jzg-tips',
    guide: 'jiuzhaigou',
    keywords: ['tip', 'advice', 'know', 'wish', 'avoid', 'mistake', 'warning'],
    content: `Jiuzhaigou tips: Download offline maps (no signal in park). Don't buy water in park (¥10 vs ¥2 outside). Wooden walkways get slippery when wet. Altitude is 2,000-3,000m - take it easy day 1. Best photos early morning before crowds. Park is HUGE, don't try to see everything in one day.`
  },
  {
    id: 'jzg-worth',
    guide: 'jiuzhaigou',
    keywords: ['worth', 'recommend', 'should', 'good', 'bad', 'opinion'],
    content: `Is Jiuzhaigou worth it? Yeah. One of the most beautiful places in China. The lakes really are that blue - not photoshop. Just don't go during national holidays. Can do it in 2 days if tight on time - one valley per day.`
  },
  // Chongqing chunks
  {
    id: 'cq-what',
    guide: 'chongqing',
    keywords: ['what', 'chongqing', 'about', 'city', 'why'],
    content: `Chongqing is a massive mountain city (30+ million people) built on cliffs above two rivers. Looks like Blade Runner - insane skyline. THE place for authentic Sichuan hotpot. Streets go up, down, and through buildings. Confusing AF but worth it.`
  },
  {
    id: 'cq-morning',
    guide: 'chongqing',
    keywords: ['morning', 'hongya', 'cave', 'start', 'bridge', 'photo'],
    content: `Chongqing morning (10am-1pm): Hongya Cave (洪崖洞) - 11-story stilt houses on cliff. View from across the river is better than inside (inside is tourist trap shops). Metro Line 2 to Linjiangmen. Then walk along Jialing River, cross Qiansi Gate Bridge for the money shot photo of Hongya Cave.`
  },
  {
    id: 'cq-hotpot',
    guide: 'chongqing',
    keywords: ['hotpot', 'hot pot', 'food', 'eat', 'lunch', 'spicy', 'restaurant', 'stomach'],
    content: `Chongqing hotpot: Go to 朱氏胖子烂火锅 (Zhu's Fat Man Hotpot) in Jiaochangkou area. Order 鸳鸯锅 (yuanyang guo) - half spicy, half mild. Even the "mild" side will kick your ass. ¥80-100 per person. BRING STOMACH MEDICINE. Get beef, lamb, tofu skin, lotus root. Cook thin meat 10-15 seconds only. Dipping sauce: sesame oil + garlic + cilantro.`
  },
  {
    id: 'cq-afternoon',
    guide: 'chongqing',
    keywords: ['afternoon', 'metro', 'train', 'building', 'liziba', 'park', 'sunset'],
    content: `Chongqing afternoon (3-6pm): Take Metro Line 2 above-ground section - train goes THROUGH an apartment building at Liziba station, there's a viewing platform. Then Eling Park (鹅岭公园) - free entry, best sunset views of city, less touristy than Nanshan.`
  },
  {
    id: 'cq-night',
    guide: 'chongqing',
    keywords: ['night', 'evening', 'view', 'skyline', 'nanshan', 'jiefangbei', 'dinner'],
    content: `Chongqing evening: Street food at Jiefangbei (解放碑) - try 酸辣粉 (spicy sour noodles) ¥10, 抄手 (Sichuan wontons). Skip overpriced restaurants. Night views from Nanshan - Didi ¥40-50, One Tree Viewing Platform ¥30 entry. Best night skyline in China.`
  },
  {
    id: 'cq-transport',
    guide: 'chongqing',
    keywords: ['get', 'around', 'metro', 'didi', 'taxi', 'walk', 'transport'],
    content: `Getting around Chongqing: Metro ¥2-7/ride, buy transit card at any station. Didi works everywhere ¥15-30. Walking = good luck - city is built on mountains, what looks close might be 200 stairs away. You will get lost, accept it.`
  },
  {
    id: 'cq-cost',
    guide: 'chongqing',
    keywords: ['cost', 'price', 'money', 'budget', 'cheap', 'total', 'yuan'],
    content: `Chongqing day trip costs: Metro ¥70, hotpot lunch ¥90, snacks ¥30, Eling Park free, Nanshan taxi+entry ¥80, dinner ¥40. TOTAL: ~¥310 (~$45 USD).`
  },
  {
    id: 'cq-tips',
    guide: 'chongqing',
    keywords: ['tip', 'advice', 'survival', 'know', 'warning', 'prepare'],
    content: `Chongqing survival tips: Bring toilet paper (bathrooms don't have it). 不要辣 (bù yào là) = "not spicy" but they might ignore you. Your stomach WILL hurt from the spice. Get Alipay/WeChat Pay working. Download offline Baidu/Amap (Google doesn't work). Summer is 35°C+ and brutal.`
  },
  {
    id: 'cq-worth',
    guide: 'chongqing',
    keywords: ['worth', 'recommend', 'good', 'bad', 'opinion', 'should'],
    content: `Is Chongqing worth it? 100%. Hotpot is unreal (best in China), city looks insane, not as touristy as Beijing/Shanghai, locals are friendly, cheap. Bad: spicy food will destroy you, summer is brutal, streets make no sense, everything is stairs. But worth it.`
  },
  {
    id: 'both-travel',
    guide: 'both',
    keywords: ['jiuzhaigou', 'chongqing', 'both', 'between', 'route', 'connect', 'travel'],
    content: `Getting between Chongqing and Jiuzhaigou: Direct bus is ~10 hours, ¥200-250, long but scenic. No direct flights. Better route: Go through Chengdu. High-speed train Chengdu↔Chongqing is only 2 hours. Do Chengdu→Jiuzhaigou→Chengdu→Chongqing.`
  }
];

function findRelevantChunks(query, maxChunks = 3) {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);

  const scored = CHUNKS.map(chunk => {
    let score = 0;

    // Check keyword matches
    for (const keyword of chunk.keywords) {
      if (queryLower.includes(keyword)) {
        score += 10;
      }
      for (const word of queryWords) {
        if (keyword.includes(word) || word.includes(keyword)) {
          score += 5;
        }
      }
    }

    // Check content matches
    const contentLower = chunk.content.toLowerCase();
    for (const word of queryWords) {
      if (contentLower.includes(word)) {
        score += 2;
      }
    }

    return { chunk, score };
  });

  // Sort by score and return top chunks
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxChunks)
    .map(s => s.chunk);
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { query } = req.body;
  if (!query || query.length < 3) return res.status(400).json({ error: 'Query too short' });

  // Find relevant chunks
  const relevant = findRelevantChunks(query);

  if (relevant.length === 0) {
    return res.status(200).json({
      answer: "we only have guides for jiuzhaigou and chongqing rn. more coming soon.",
      source: null
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(200).json({
      answer: "search isn't set up yet - read the guides below!",
      source: null
    });
  }

  const context = relevant.map(c => c.content).join('\n\n');
  const guide = relevant[0].guide;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 200,
        system: `You're a chill travel assistant. Answer in 2-3 sentences max. Casual lowercase tone. Be specific with costs/times when relevant. If info isn't in the context, say you don't have that info.`,
        messages: [{
          role: 'user',
          content: `Context:\n${context}\n\nQuestion: ${query}`
        }]
      })
    });

    if (!response.ok) throw new Error('API error');

    const data = await response.json();
    const answer = data.content[0].text;
    const source = guide === 'both' ? null :
      guide === 'jiuzhaigou' ? '/jiuzhaigou.html' : '/chongqing.html';

    return res.status(200).json({ answer, source });

  } catch (error) {
    return res.status(200).json({
      answer: "search broke. the guides are short, just read em.",
      source: null
    });
  }
}
