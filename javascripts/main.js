if (window.location.pathname === '/projects/') {
  $("a#stories-link, a#home-link, a#about-link").click(function(e){
    e.preventDefault();
    href = $(this).attr('href');
    $('img#current-background').animate({"left": "100%"}, 1000, function(){
      window.location = href;
    });
    $('img#off-screen-background').animate({"left": "0%"}, 1000, function(){
      window.location = href;
    });
  });
}
$("a#projects-link").click(function(e){
  e.preventDefault();
  href = $(this).attr('href');
  $('img#current-background').animate({"left": "-100%"}, 1000, function(){
    window.location = href;
  });
  $('img#off-screen-background').animate({"left": "0%"}, 1000, function(){
      window.location = href;
    });
});

