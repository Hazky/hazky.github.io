  //Mapa
  function init() {
    var mapProperties = {
      center:new google.maps.LatLng(50.23109, 18.98474),
      zoom: 18, 
      mapTypeId:google.maps.MapTypeId.ROADMAP,
     };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProperties);

    map.addListener('click', function(){
      if (map) map.setOptions({scrollwheel: true});
    });

    map.addListener('mouseout', function(){
      if (map) map.setOptions({scrollwheel: false})
    })
  }

  google.maps.event.addDomListener(window, 'load', init);

//Smooth scroll po kliknięciu na odnośnik w navbarze
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Podświetlenie aktywnego elementu w navbarze
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
