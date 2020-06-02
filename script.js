function showLink(id1, id2) {
  document.getElementById(id1).style.filter = 'blur(4px)';
  document.getElementById(id2).style.opacity = '1';
}
function hideLink(id1, id2) {
  document.getElementById(id1).style.filter = 'none';
  document.getElementById(id2).style.opacity = '0';
}
//get elements
var about = document.getElementById('about');
var projects = document.getElementById('projects');
var contact = document.getElementById('contact');

var navHome = document.getElementById('navHome');
var navAbout = document.getElementById('navAbout');
var navContact = document.getElementById('navContact');
var navProjects = document.getElementById('navProjects');
//set up vars for onScroll event
var last_known_scroll_position = 0;
1566;
var ticking = false;

//set up update function
function updatePos(pos) {
  if (pos >= contact.offsetTop - 350) {
    if (!navContact.classList.contains('current')) {
      navAbout.classList.remove('current');
      navHome.classList.remove('current');
      navProjects.classList.remove('current');
      navContact.classList.add('current');
    }
  } else if (pos >= projects.offsetTop - 250) {
    if (!navProjects.classList.contains('current')) {
      navAbout.classList.remove('current');
      navHome.classList.remove('current');
      navContact.classList.remove('current');
      navProjects.classList.add('current');
    }
  } else if (pos >= about.offsetTop - 250) {
    if (!navAbout.classList.contains('current')) {
      navProjects.classList.remove('current');
      navHome.classList.remove('current');
      navContact.classList.remove('current');
      navAbout.classList.add('current');
      console.log('this');
    }
  } else if (pos <= about.offsetTop + 250) {
    if (!navHome.classList.contains('current')) {
      navProjects.classList.remove('current');
      navAbout.classList.remove('current');
      navContact.classList.remove('current');
      navHome.classList.add('current');
    }
  }
}

window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;
  updatePos();
  if (!ticking) {
    window.requestAnimationFrame(function () {
      updatePos(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
