fetch('data/movies.json')
  .then(res => res.json())
  .then(data => {
    const box = document.getElementById('movieContainer');
    const search = document.getElementById('search');
    function show(movies) {
      box.innerHTML = '';
      movies.forEach(m => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
          <img src="${m.poster}" alt="${m.title}">
          <h3>${m.title}</h3>
          <p>${m.lang} | ${m.year}</p>
          <a href="${m.page}">Details</a>
        `;
        box.appendChild(card);
      });
    }
    show(data);
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase();
      const filtered = data.filter(x => x.title.toLowerCase().includes(q));
      show(filtered);
    });
  });