// Registering Components as Clickable

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
        Swal.fire({
            imageUrl: 'Resources/AI/CulcG.png',
            imageAlt: 'Culc AI',
            width: "80%",
            backdrop: "rgba(1, 1, 1, .8)"
        });
      });
    }
  });

  AFRAME.registerComponent('skiles', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Swal.fire({
            title: 'Skiles',
            imageUrl: 'Resources/test.jpg',
            imageAlt: 'Test Image'
        });
      });
    }
  });

  AFRAME.registerComponent('crc', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Swal.fire({
            title: 'The CRC',
            imageUrl: 'Resources/test.jpg',
            imageAlt: 'Test Image'
        });
      });
    }
  });

  AFRAME.registerComponent('nav', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Swal.fire({
            title: 'NAV',
            imageUrl: 'Resources/test.jpg',
            imageAlt: 'Test Image'
        });
      });
    }
  });

  AFRAME.registerComponent('ehall', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Swal.fire({
            title: 'Exhibition Hall',
            imageUrl: 'Resources/test.jpg',
            imageAlt: 'Test Image'
        });
      });
    }
  });

  AFRAME.registerComponent('klaus', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Swal.fire({
            imageUrl: 'Resources/AI/KlausG2.png',
            imageAlt: 'Klaus AI',
            width: "80%",
            backdrop: "rgba(1, 1, 1, .8)"
        });
      });
    }
  });

  AFRAME.registerComponent('kendeda', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Swal.fire({
            imageUrl: 'Resources/AI/KendedaG.png',
            imageAlt: 'Kendeda AI',
            width: "80%",
            backdrop: "rgba(1, 1, 1, .8)"
        });
      });
    }
  });

  AFRAME.registerComponent('techgreen', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Swal.fire({
            title: 'Tech Green',
            text: "Green Oasis of the City",
            imageUrl: 'Resources/techGreen.png',
            imageAlt: 'Tech Green',
            width: "50%"
        });
      });
    }
  });

  AFRAME.registerComponent('bobbydodd', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        Swal.fire({
            title: 'Bobby Dodd',
            imageUrl: 'Resources/test.jpg',
            imageAlt: 'Test Image'
        });
      });
    }
  });

