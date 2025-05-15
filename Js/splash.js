// JavaScript for Splash Screen redirection and animation
setTimeout(function() {
    var splash = document.querySelector('.splash-container');
    splash.style.transition = 'opacity 1s ease-out';
    splash.style.opacity = 0;
  
    setTimeout(function() {
      window.location.href = "home.html"; // Redirect to home page 
    }, 1000); // Redirect after the animation duration
  }, 3000); 
  