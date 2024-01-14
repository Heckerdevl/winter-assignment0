var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
      },
  });

  const f = document.getElementById('form');
  const q = document.getElementById('query');
  const google = 'https://www.google.com/search?q=site%3A+';
  const site = 'q.com';

  function submitted(event) {
    event.preventDefault();
    const url = google + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
  }

  f.addEventListener('submit', submitted);
