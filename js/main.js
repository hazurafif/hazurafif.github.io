document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    });
  }
});
