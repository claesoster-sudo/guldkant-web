// Mobil: sidhuvudet glider undan när man scrollar nedåt och kommer tillbaka när man scrollar uppåt.
(function () {
  var huvud = document.querySelector('.sidhuvud');
  if (!huvud) return;
  var mobil = window.matchMedia('(max-width: 47.99rem)');
  var senast = window.scrollY;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (!mobil.matches || y < 80) {
      huvud.classList.remove('dold');
    } else if (y > senast + 6) {
      huvud.classList.add('dold');
    } else if (y < senast - 6) {
      huvud.classList.remove('dold');
    }
    senast = y;
  }, { passive: true });
})();
