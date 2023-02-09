/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1.3,
          "color": "random"
        },
        "polygon": {
          "nb_sides": 1
        },
        "image": {
          "src": "img/github.svg",
          "width": 0,
          "height": 0
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 4.9,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "size_min": 3.3,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 135,
        "color": "#00FFFF",
        "opacity": 0.4,
        "width": 1.7
      },
      "move": {
        "enable": true,
        "speed": 4.6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 1
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "https://te.legra.ph/file/7c782707795c601a2a140.jpg",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
