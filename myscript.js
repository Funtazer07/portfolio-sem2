window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var scrollFactor = 0.2; // Adjust the scroll factor as needed
  
    // Move #dark and #bright elements slightly to the right based on scroll position
    document.getElementById('dark').style.marginLeft = (6 + scrollPosition * scrollFactor) + 'em';
    document.getElementById('bright').style.marginLeft = (-scrollPosition * scrollFactor) + 'em';  });
  