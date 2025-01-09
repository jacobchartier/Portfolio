let isNavbarRendered = false;

const navbarAnimDuration = 1000, dropdownAnimDuration = 300;

$(document).ready(function() {
    $('nav').slideDown(1000, function() {
        $("#nav-title, #nav-subtitle, #link-about, #link-projects, #link-background, #link-contact").each(function(i) {
            $(this).delay(i*20).animate({opacity: "100%"});
        })

        typewritterAnimation("nav-title-text");
        typewritterAnimation("nav-subtitle-text");

        isNavbarRendered = true;

        $("header, footer").delay(500).each(function (index) {
            $(this)
              .delay(index * 1200) // Delay based on the index (e.g., 200ms for each item)
              .queue(function (next) {
                $(this).slideDown(1000);
                next();
            });
        });
        
        setTimeout(typewritterAnimation('nav-subtitle-breadcrumbs'), 1000);
    });
});

$(document).ready(function () {
  
    // Check and animate elements on scroll
    function animateOnScroll() {
        $("header, footer").each(function (index) {
              $(this)
                .delay(index * 1200) // Delay based on the index (e.g., 200ms for each item)
                .queue(function (next) {
                  $(this).slideDown(1000);
                  next();
                });
          });
    }

  });

// [Get Animation Content] Function to get, with an id, the content for an animation.
//   Returns the content as a string.
function getAnimationContent(id) {
    return document.querySelector('#' + id).dataset.animationContent;
}

// [Get Animation Speed] Function to get, with an id, the speed for an animation.
//   Returns the number in miliseconds
function getAnimationSpeed(id) {
    return document.querySelector('#' + id).dataset.animationSpeed;
}

// [Type Writter Animation] Function to play a type writting animation.
//    The text can be set in the 'data-typewritter-text' attribute inside the html.
//    The animation speed can be set in the 'data-typewritter-speed' attribute inside the html.
function typewritterAnimation(id) {
    // Variable to keep track of the current index.
    let index = 0;

    // Recursive function that add the next character in the html.
    function insertNextChar() {
        // Check if the current index is less than the text length.
        if (index < getAnimationContent(id).length) {
            // Add the character of the current index to the html document.
            document.getElementById(id).innerHTML += getAnimationContent(id).charAt(index++);

            // Call itself to print the next character.
            setTimeout(insertNextChar, getAnimationSpeed(id));
        }
    }
    
    // Call of insertNextChar to start the animation.
    insertNextChar();
}

function typedeleterAnimation(id, start = 0) {
    let index = getAnimationContent(id).length;

    function removePreviousChar() {
        if (index > 0) {
            document.getElementById(id).innerHTML = getAnimationContent(id).slice(start, index--);
            setTimeout(removePreviousChar, getAnimationSpeed(id));
        } 
    }

    removePreviousChar();
}

let breadcrumbs = false;

function typewritterTransition(destination, text, start = 0) {
    if (breadcrumbs === false) 
        typewritterAnimation('breadcrumbs-separator');

    breadcrumbs = true;

    let index = document.getElementById(destination).innerHTML.length;

    function insertNextChar() {
        // Check if the current index is less than the text length.
        if (index < getAnimationContent(text).length) {
            // Add the character of the current index to the html document.
            document.getElementById(destination).innerHTML += getAnimationContent(text).charAt(index++);

            // Call itself to print the next character.
            setTimeout(insertNextChar, getAnimationSpeed(destination));
        }
    }

    function removePreviousChar() {
        if (index > -1) {
            document.getElementById(destination).innerHTML = document.getElementById(destination).innerHTML.slice(start, index--);
            setTimeout(removePreviousChar, getAnimationSpeed(destination));
        }
        else {
            insertNextChar();
        }
    }

    removePreviousChar();
}

