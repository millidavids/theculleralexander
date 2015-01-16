if (window.location.pathname === '/projects/') {
  $('img#background').css("left", "-100%");

  $("a#stories-link").click(function(e){
    e.preventDefault();
    href = $(this).attr('href');
    $('img#background').animate({"left": "0%"}, 1000, function(){
      window.location = href;
    });
  });
} else {
  $("a#projects-link").click(function(e){
    e.preventDefault();
    href = $(this).attr('href');
    $('img#background').animate({"left": "-100%"}, 1000, function(){
      window.location = href;
    });
  });
}
