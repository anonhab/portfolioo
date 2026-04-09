/* Particles.js config — dark blue theme */
particlesJS('particles-js', {
  particles: {
    number: { value: 55, density: { enable: true, value_area: 900 } },
    color: { value: ['#2f81f7', '#a371f7', '#8b949e'] },
    shape: { type: 'circle' },
    opacity: { value: 0.45, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false } },
    size:    { value: 2.5, random: true, anim: { enable: false } },
    line_linked: { enable: true, distance: 140, color: '#2f81f7', opacity: 0.12, width: 1 },
    move: { enable: true, speed: 1.4, direction: 'none', random: true, straight: false, out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick:  { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      grab:   { distance: 160, line_linked: { opacity: 0.4 } },
      push:   { particles_nb: 3 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
