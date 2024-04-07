
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Magnific Popup
-----------------------------------------------*/
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
         fixedContentPos: false,
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.contenedor_tarjeta');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1 // Detectar cuando la mitad de la tarjeta está visible
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('figure').classList.add('show-back');
      } else {
        entry.target.querySelector('figure').classList.remove('show-back');
      }
    });
  }, options);

  cards.forEach(card => {
    observer.observe(card);
  });
});

/* Istope Portfolio
-----------------------------------------------*/
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /*  smoothscroll
  ----------------------------------------------*/
   $(function() {
        $('#home a, .navbar-default a, .gototop').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 2000);
            event.preventDefault();
        });
    });


  /* home slideshow section
  -----------------------------------------------*/
  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
      "images/avan3.jpg",
      "images/soja.jpg", 
       "images/avan2.jpg",
       "images/avan4.jpg",
        ],  {duration: 2000, fade: 750});
    });
  })


   /* Flexslider
    -----------------------------------------------*/
    $(window).load(function() {
      $('.flexslider').flexslider({
         animation: "slide"
      });
    });
  

  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#feature').parallax("100%", 0.3);
    $('#video').parallax("100%", 0.2);
    $('#menu').parallax("100%", 0.3);
    $('#equipo').parallax("100%", 0.3);
    $('#servicios').parallax("100%", 0.1);
    $('#beneficios').parallax("100%", 0.1);
    $('#contact').parallax("100%", 0.2);
  }
  initParallax();


  /* Nivo lightbox
    -----------------------------------------------*/
  $('#gallery .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

// Function para mensaje por wpp 

  function enviarWhatsApp() {
    var userMessage = document.getElementById('userMessage').value;
    const phoneNumber = '5493468607247';
    var whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(userMessage)}`
    window.open(whatsappLink, '_blank');
}
