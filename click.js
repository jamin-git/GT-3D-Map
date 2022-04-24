// Registering Components as Clickable

var culc = [
  { src: 'Resources/AI/Culc1.png'},
  { src: 'Resources/AI/Culc2.png'},
]
var kendeda = [
  { src: 'Resources/AI/Kendeda1.png'},
  { src: 'Resources/AI/Kendeda2.png'},
]

AFRAME.registerComponent("overlay", {
  dependencies: ['material'],
  init: function () {
    this.el.sceneEl.renderer.sortObjects = true;
    this.el.object3D.renderOrder = 100;
    this.el.components.material.material.depthTest = false;
    this.el.addEventListener('click', function () {
      Swal.fire({
        imageUrl: 'Resources/Welcome.png',
        imageAlt: 'Welcome Image',
        width: "80%",
        backdrop: "rgba(1, 1, 1, .99)"
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
        Swal.fire({
          imageUrl: 'Resources/Welcome.png',
          imageAlt: 'Welcome Image',
          width: "80%",
          backdrop: "rgba(1, 1, 1, .99)"
        });
});



  AFRAME.registerComponent('culc', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Spotlight.show(culc);
      });
    }
  });

  AFRAME.registerComponent('skiles', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Spotlight.show(culc);
      });
    }
  });

  AFRAME.registerComponent('crc', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Spotlight.show(culc);
      });
    }
  });

  AFRAME.registerComponent('nav', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Spotlight.show(culc);
      });
    }
  });

  AFRAME.registerComponent('ehall', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Spotlight.show(culc);
      });
    }
  });

  AFRAME.registerComponent('klaus', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Spotlight.show(culc);
      });
    }
  });

  AFRAME.registerComponent('kendeda', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Spotlight.show(kendeda);
      });
    }
  });

  AFRAME.registerComponent('techgreen', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Spotlight.show(culc);
      });
    }
  });

  AFRAME.registerComponent('bobbydodd', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Spotlight.show(culc);
      });
    }
  });