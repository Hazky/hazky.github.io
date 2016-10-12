  //Mapa
  function init() {
    var mapProperties = {
      center: new google.maps.LatLng(50.23109, 18.98474),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
     };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProperties);

    map.addListener('click', function () {
      if (map) map.setOptions({scrollwheel: true});
    });

    map.addListener('mouseover', function(){
      if (map) map.setOptions({scrollwheel: false})
    });
  }

  google.maps.event.addDomListener(window, 'load', init);

//Smooth scroll po kliknięciu na odnośnik w navbarze
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});

//Podświetlenie aktywnego elementu w navbarze
$(".nav a").on("click", function () {
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
