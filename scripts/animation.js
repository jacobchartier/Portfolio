$(document).ready(function() {
    $('nav').slideDown(1000, function() {
        $("#nav-title, #link-about, #link-projects, #link-experiences, #link-contact").each(function(i) {
            $(this).delay(i*100).animate({opacity: "100%"});
        })
    });
});