const typeWritterSpeed = 120;
let isNavbarRendered = false;

const navbarAnimDuration = 1000, dropdownAnimDuration = 300;

$(document).ready(function() {
    $('nav').slideDown(1000, function() {
        $("#nav-title, #nav-subtitle, #link-about, #link-projects, #link-background, #link-contact").each(function(i) {
            $(this).delay(i*20).animate({opacity: "100%"});
        })

        isNavbarRendered = true;
        typeWritter("nav-title-text", GetText("#nav-title-text"), typeWritterSpeed);
        typeWritter("nav-subtitle-text", GetText("#nav-subtitle-text"), typeWritterSpeed+100);

    });
});

$('#link-projects, #dropdown-projects').mouseenter(function() {
    $('#dropdown-background').slideUp(dropdownAnimDuration);

        // Make sure that the navbar is rendrered before showing the projects dropdown
        if (isNavbarRendered)
            $('#dropdown-projects').slideDown(dropdownAnimDuration);
        
        // Delay the animation to make it appear after the navbar is rendered
        $('#dropdown-projects').delay(navbarAnimDuration).slideDown(dropdownAnimDuration);
        
});

$('#link-background, #dropdown-background').mouseenter(function() {
    $('#dropdown-projects').slideUp(dropdownAnimDuration);

    // Make sure that the navbar is rendrered before showing the background dropdown
    if (isNavbarRendered) 
        $('#dropdown-background').slideDown(dropdownAnimDuration);
        
    // Delay the animation to make it appear after the navbar is rendered
    $('#dropdown-background').delay(navbarAnimDuration).slideDown(dropdownAnimDuration);
});

$('.dropdown').mouseleave(function() {
    $('#dropdown-projects, #dropdown-background').slideUp(dropdownAnimDuration).delay();
});

function typeWritter(id, text, speed) {
    let index = 0;

    function nextChar() {
        if (index < text.length) {
            document.getElementById(id).innerHTML += text.charAt(index++);
            setTimeout(nextChar, speed);
        }
    }

    if (index < text.length) {
        document.getElementById(id).innerHTML += text.charAt(index++);
        setTimeout(nextChar, speed);
    }
}

function GetText(id) {
    return document.querySelector(id).dataset.text;
}