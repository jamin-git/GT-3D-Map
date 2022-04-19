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
            text: 'A place crowded with people studying',
            imageUrl: 'Resources/culcTest.png',
            imageAlt: 'Culc AI'
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
            imageUrl: 'Resources/test.jpg',
            imageAlt: 'Test Image'
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
            imageUrl: 'Resources/test.jpg',
            imageAlt: 'Test Image'
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
            imageUrl: 'Resources/test.jpg',
            imageAlt: 'Test Image'
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

