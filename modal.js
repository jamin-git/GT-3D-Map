// AFRAME.registerComponent('kendeda', {
//     schema: {
//       default: ''
//     },
//     init: function () {
//       this.el.addEventListener('click', function () {
//         $(document).magnificPopup({
//             items: [
//               {
//                 src: 'Resources/AI/KendedaG.png',
//               },
//               {
//                 src: 'Resources/AI/KlausG2.png',
//               }
//             ],
//             gallery: {
//               enabled: true
//             },
//             type: 'image'
//         });
//       });
//     }
//   });

var gallery = [
    { src: 'Resources/AI/KendedaG.png'},
    { src: 'Resources/AI/KlausG2.png'},
    { src: 'Resources/AI/CulcG.png'},
]

AFRAME.registerComponent('kendeda', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
          Spotlight.show(gallery);
      });
    }
  });





  const culc1 = Swal.mixin({
    imageUrl: 'Resources/AI/CulcG.png',
    imageAlt: 'Culc AI',
    width: "80%",
    backdrop: "rgba(1, 1, 1, .8)",
    showConfirmButton: true,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Prev",
    denyButtonText: "Close",
    cancelButtonText: "Next",
    denyButtonColor: "#3085d6",
    confirmButtonColor: "#aaa",
  }).then((result) => {
    if (!result.isDenied) {
      culc1.fire();
    }
  });
  
    AFRAME.registerComponent('culc', {
      schema: {
        default: ''
      },
      init: function () {
        this.el.addEventListener('click', function () {
          // Swal.fire({
          //     imageUrl: 'Resources/AI/CulcG.png',
          //     imageAlt: 'Culc AI',
          //     width: "80%",
          //     backdrop: "rgba(1, 1, 1, .8)",
          //     showConfirmButton: true,
          //     showDenyButton: true,
          //     showCancelButton: true,
          //     confirmButtonText: "Prev",
          //     denyButtonText: "Close",
          //     cancelButtonText: "Next",
          //     denyButtonColor: "#3085d6",
          //     confirmButtonColor: "#aaa",
          // });
          culc1.fire().then((result) => {
            if (!result.isDenied) {
              culc1.fire();
            }
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