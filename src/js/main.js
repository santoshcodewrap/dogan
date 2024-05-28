$(function () {
    var availableDates = ["2024-05-27", "2024-05-28", "2024-05-29", "2024-05-30"];

    // Initialize Datepicker
    $("#departureDate").datepicker({
      beforeShowDay: function (date) {
        var dateString = $.datepicker.formatDate('yy-mm-dd', date);
        return [availableDates.includes(dateString), 'available-date']; // Highlight available dates
      }
    });

    $('.slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      autoplay: true,
      arrows: true,
      prevArrow: "<button type='button' class='prev btn btn-dark z-1'><i class='fa fa-chevron-left'></button>",
      nextArrow: "<button type='button' class='next btn btn-dark z-1'><i class='fa fa-chevron-right'></button>"
      ,
      responsive: [
        {
          breakpoint: 968,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 740,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    // hiding the to the top button 
    $('[href="#top"]').addClass("d-none")
    window.addEventListener("scroll", function() {
      // console.log(window.scrollY)
      if(window.scrollY > 200) {
        // console.log(window.scrollY)
        $('[href="#top"]').removeClass("d-none")
      }else {

        $('[href="#top"]').addClass("d-none")
      }
    })
    // console.log($('[href="#top"]'))
  });
