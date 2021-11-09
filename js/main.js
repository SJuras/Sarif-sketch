// adds a "sticky" class to header when scrolling down.
window.addEventListener('scroll', function(){
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});
// sticky header END

// toggle menu
function toggleMenu(){
  const sidemenu = document.querySelector(".navigation");
  const toggle = document.querySelector(".toggle");
  sidemenu.classList.toggle("active");
  toggle.classList.toggle("active");
}
// toggle menu END
