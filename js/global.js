if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/js/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}


// Menu open-close

$(document).ready(function() {
  $(".menu-open").click(function(){
    $(".menu-open").addClass("open");
    $(".menu-close").addClass("open");
    $(".main-site-navigation").addClass("open");
  });

  $(".menu-close").click(function(){
    $(".menu-open").removeClass("open");
    $(".menu-close").removeClass("open");
    $(".main-site-navigation").removeClass("open");
  });

});
