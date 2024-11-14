let isNavbarRendered = false;

const navbarAnimDuration = 1000, dropdownAnimDuration = 300;

$(document).ready(function() {
    $('nav').slideDown(1000, function() {
        $("#nav-title, #nav-subtitle, #link-about, #link-projects, #link-background, #link-contact").each(function(i) {
            $(this).delay(i*100).animate({opacity: "100%"});
        })

        isNavbarRendered = true;
    });
});

$('#link-projects, #dropdown-projects').mouseenter(function() {
    // Make sure that the navbar is rendrered before showing the projects dropdown
    if (isNavbarRendered)
        $('#dropdown-projects').slideDown(dropdownAnimDuration);
    
    // Delay the animation to make it appear after the navbar is rendered
    $('#dropdown-projects').delay(navbarAnimDuration).slideDown(dropdownAnimDuration);
})

$('#link-background, #dropdown-background').mouseenter(function() {
    // Make sure that the navbar is rendrered before showing the background dropdown
    if (isNavbarRendered) 
        $('#dropdown-background').slideDown(dropdownAnimDuration);
        
    // Delay the animation to make it appear after the navbar is rendered
    $('#dropdown-background').delay(navbarAnimDuration).slideDown(dropdownAnimDuration);
})

$('.dropdown').mouseleave(function() {
    $('#dropdown-projects, #dropdown-background').slideUp(dropdownAnimDuration);
})