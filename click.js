// Registering Components as Clickable

  AFRAME.registerComponent('culc', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        // console.log("clicked!");
        Swal.fire({
            title: 'The Culc',
            text: 'A lit building surrounded by people on a dark night',
            imageUrl: 'Resources/Culc.png',
            imageAlt: 'Culc AI',
            width: "75%"
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
        // console.log("clicked!");
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
        // console.log("clicked!");
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
        // console.log("clicked!");
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
        // console.log("clicked!");
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
        // console.log("clicked!");
        Swal.fire({
            title: 'Klaus',
            text: 'The smells of computing',
            imageUrl: 'Resources/Klaus.png',
            imageAlt: 'Klaus AI',
            width: "50%"
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
        // console.log("clicked!");
        Swal.fire({
            title: 'Kendeda',
            text: 'Green and Natural Vibrations',
            imageUrl: 'Resources/Kendeda.png',
            imageAlt: 'Kendeda AI',
            width: "50%"
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
        // console.log("clicked!");
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
        // console.log("clicked!");
        Swal.fire({
            title: 'Bobby Dodd',
            imageUrl: 'Resources/test.jpg',
            imageAlt: 'Test Image'
        });
      });
    }
  });

