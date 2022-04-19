// AFRAME.registerComponent('c1', {
//     schema: {
//       default: ''
//     },
//     init: function () {
//       var el = this.el;

//       el.addEventListener('click', function () {
//         console.log("clicked!");
//         // Swal.fire('Any fool can use a computer');
//       });
//     }
//   });

  AFRAME.registerComponent('culc', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        // console.log("clicked!");
        Swal.fire({
            title: 'The Culc',
            imageUrl: 'Resources/test.jpg',
            imageAlt: 'Test Image'
        });
      });
    }
  });
