document.addEventListener('DOMContentLoaded', function() {
  const arrowLeft = document.querySelector('.arrow__left');
  const arrowRight = document.querySelector('.arrow__right');
  const charlotteReview = document.getElementById('charlotteReview');
  const adamReview = document.getElementById('adamReview');

  arrowLeft.addEventListener('click', function() {
    charlotteReview.style.display = 'block';
    adamReview.style.display = 'none';
  });

  arrowRight.addEventListener('click', function() {
    charlotteReview.style.display = 'none';
    adamReview.style.display = 'block';
  });
});

function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }
