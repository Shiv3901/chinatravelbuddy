// Search functionality for Peach
(function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchContent = document.getElementById('searchContent');

  if (!searchInput) return;

  let debounceTimer;

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch();
    }
  });

  // Also search on blur (when user clicks away) if there's content
  searchInput.addEventListener('blur', function() {
    if (searchInput.value.trim().length > 3) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(performSearch, 300);
    }
  });

  async function performSearch() {
    const query = searchInput.value.trim();

    if (query.length < 3) {
      searchResults.classList.remove('active');
      return;
    }

    // Show loading state
    searchResults.classList.add('active');
    searchContent.innerHTML = '<span class="search-loading">thinking...</span>';

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();

      // Display the result
      searchContent.innerHTML = formatResult(data.answer, data.source);

    } catch (error) {
      console.error('Search error:', error);
      searchContent.innerHTML = 'sorry, search is broken rn. try refreshing or just read the guides below.';
    }
  }

  function formatResult(answer, source) {
    let html = answer;

    if (source) {
      html += `\n\n<a href="${source}">→ read the full guide</a>`;
    }

    return html;
  }

  // Allow clicking on search results to close them
  searchResults.addEventListener('click', function(e) {
    if (e.target === searchResults) {
      searchResults.classList.remove('active');
    }
  });
})();
