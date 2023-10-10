document.addEventListener( 'DOMContentLoaded', function() {
  let newArrivalsSlider = document.querySelector(".new-arrivals-slider");
  let topSellingSlider = document.querySelector(".top-selling-slider");

  if(newArrivalsSlider) {
    new Splide(newArrivalsSlider, {
      perMove: 1,
      padding: {
        right: 120
      },
      gap: 16,
      mediaQuery: 'min',
      arrows: false,
      pagination: false,
      breakpoints: {
        390: {
          padding: {
            right: 158
          }
        }
      }
    }).mount();
  }

  if(topSellingSlider) {
    new Splide(topSellingSlider, {
      perMove: 1,
      padding: {
        right: 120
      },
      gap: 16,
      mediaQuery: 'min',
      arrows: false,
      pagination: false,
      breakpoints: {
        390: {
          padding: {
            right: 158
          }
        }
      }
    }).mount();
  }
});
