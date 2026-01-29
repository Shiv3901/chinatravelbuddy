// Local search - no API needed
// Just keyword matching against guide content

const CHUNKS = [
  // Jiuzhaigou
  { guide: 'jiuzhaigou', keywords: ['what', 'jiuzhaigou', 'about', 'unesco', 'sichuan', 'lakes', 'when', 'visit', 'best time', 'avoid'],
    content: `jiuzhaigou is a UNESCO site in sichuan. insane turquoise lakes, waterfalls, tibetan villages. best time: sept-oct (fall colors) or june-aug. avoid chinese national holidays - golden week is the worst.` },
  { guide: 'jiuzhaigou', keywords: ['get', 'there', 'bus', 'flight', 'chengdu', 'transport', 'how', 'travel', 'car'],
    content: `from chengdu: bus is 8-10 hours, ¥150, from chadianzi station (bumpy af, bring motion sickness pills). flight is 50 min to jiuzhai airport then 2hr bus. private car ¥400-600.` },
  { guide: 'jiuzhaigou', keywords: ['itinerary', 'days', 'plan', 'schedule', 'do', 'see', 'valley', 'lake'],
    content: `3-day plan: day 1 - rize valley (five flower lake is insane). day 2 - zechawa valley + shuzheng valley, start at 7am. day 3 - revisit favorites then leave. walk between stops, buses are packed.` },
  { guide: 'jiuzhaigou', keywords: ['stay', 'hotel', 'hostel', 'sleep', 'accommodation', 'where', 'zhangzha'],
    content: `stay in zhangzha town outside the park. budget: ¥60-100/night at hostels. mid-range: ¥200-400. there's a sheraton if you want comfort but why tho.` },
  { guide: 'jiuzhaigou', keywords: ['cost', 'price', 'money', 'budget', 'cheap', 'expensive', 'yuan', 'total'],
    content: `3-day costs per person: park ¥169, shuttle ¥90, accommodation ¥180, food ¥200, bus roundtrip ¥300, misc ¥100. total: ~¥1,000 (~$140 USD).` },
  { guide: 'jiuzhaigou', keywords: ['bring', 'pack', 'what', 'need', 'prepare', 'clothes'],
    content: `bring: layers (cold morning, warm afternoon), sunscreen (altitude burns fast), snacks + water (expensive in park), cash, motion sickness pills, comfy shoes (15-20km walking/day).` },
  { guide: 'jiuzhaigou', keywords: ['tip', 'advice', 'know', 'wish', 'avoid', 'mistake', 'warning'],
    content: `tips: download offline maps (no signal). don't buy water in park (¥10 vs ¥2 outside). walkways slippery when wet. altitude 2-3km - take it easy day 1. best photos early morning.` },
  { guide: 'jiuzhaigou', keywords: ['worth', 'recommend', 'should', 'good'],
    content: `worth it? yeah. one of the most beautiful places in china. lakes really are that blue. just don't go during holidays. can do it in 2 days if rushed.` },
  // Chongqing
  { guide: 'chongqing', keywords: ['what', 'chongqing', 'about', 'city', 'why'],
    content: `chongqing is a massive mountain city (30M+ people) on cliffs above two rivers. looks like blade runner. THE place for sichuan hotpot. streets go through buildings. confusing but worth it.` },
  { guide: 'chongqing', keywords: ['morning', 'hongya', 'cave', 'start', 'bridge', 'photo'],
    content: `morning: hongya cave (洪崖洞) - 11-story stilt houses on cliff. view from across river is better (inside is tourist trap). metro line 2 to linjiangmen. cross qiansi gate bridge for the money shot.` },
  { guide: 'chongqing', keywords: ['hotpot', 'hot pot', 'food', 'eat', 'lunch', 'spicy', 'restaurant', 'stomach'],
    content: `hotpot: go to 朱氏胖子烂火锅 in jiaochangkou. order 鸳鸯锅 (half spicy/mild) - even "mild" kicks your ass. ¥80-100/person. BRING STOMACH MEDICINE. get beef, lamb, tofu skin, lotus root.` },
  { guide: 'chongqing', keywords: ['afternoon', 'metro', 'train', 'building', 'liziba', 'park', 'sunset'],
    content: `afternoon: metro line 2 goes THROUGH an apartment building at liziba station. then eling park (鹅岭公园) - free, best sunset views, less touristy than nanshan.` },
  { guide: 'chongqing', keywords: ['night', 'evening', 'view', 'skyline', 'nanshan', 'jiefangbei', 'dinner'],
    content: `evening: street food at jiefangbei - try 酸辣粉 (spicy sour noodles) ¥10. night views from nanshan - didi ¥40-50, one tree platform ¥30. best night skyline in china.` },
  { guide: 'chongqing', keywords: ['get', 'around', 'metro', 'didi', 'taxi', 'walk', 'transport'],
    content: `getting around: metro ¥2-7/ride. didi works everywhere ¥15-30. walking = good luck - city is all mountains, what looks close might be 200 stairs away.` },
  { guide: 'chongqing', keywords: ['cost', 'price', 'money', 'budget', 'cheap', 'total', 'yuan'],
    content: `day trip costs: metro ¥70, hotpot ¥90, snacks ¥30, nanshan ¥80, dinner ¥40. total: ~¥310 (~$45 USD).` },
  { guide: 'chongqing', keywords: ['tip', 'advice', 'survival', 'know', 'warning', 'prepare'],
    content: `survival tips: bring toilet paper (bathrooms don't have it). 不要辣 = "not spicy" but they might ignore you. stomach WILL hurt. get alipay working. download baidu maps (google doesn't work).` },
  { guide: 'chongqing', keywords: ['worth', 'recommend', 'good', 'bad'],
    content: `worth it? 100%. hotpot is unreal, city looks insane, locals friendly, cheap. bad: spicy food destroys you, summer is 35°C+, streets make no sense, everything is stairs.` },
  { guide: 'both', keywords: ['jiuzhaigou', 'chongqing', 'both', 'between', 'route', 'connect'],
    content: `between chongqing and jiuzhaigou: direct bus ~10 hours ¥200-250. better route: go through chengdu. high-speed train chengdu↔chongqing is only 2 hours.` }
];

(function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchContent = document.getElementById('searchContent');

  if (!searchInput) return;

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch();
    }
  });

  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length < 3) {
      searchResults.classList.remove('active');
      return;
    }

    const results = findRelevantChunks(query);

    searchResults.classList.add('active');

    if (results.length === 0) {
      searchContent.innerHTML = "we only have guides for jiuzhaigou and chongqing rn. try searching for those.";
      return;
    }

    // Show top result
    const top = results[0];
    let html = top.content;

    const source = top.guide === 'both' ? null :
      top.guide === 'jiuzhaigou' ? '/jiuzhaigou.html' : '/chongqing.html';

    if (source) {
      html += `\n\n<a href="${source}">→ read the full ${top.guide} guide</a>`;
    }

    searchContent.innerHTML = html;
  }

  function findRelevantChunks(query) {
    const queryWords = query.split(/\s+/).filter(w => w.length > 2);

    const scored = CHUNKS.map(chunk => {
      let score = 0;

      for (const keyword of chunk.keywords) {
        if (query.includes(keyword)) score += 10;
        for (const word of queryWords) {
          if (keyword.includes(word) || word.includes(keyword)) score += 5;
        }
      }

      const contentLower = chunk.content.toLowerCase();
      for (const word of queryWords) {
        if (contentLower.includes(word)) score += 2;
      }

      return { ...chunk, score };
    });

    return scored
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }
})();
