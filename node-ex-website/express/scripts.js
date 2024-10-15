$(document).ready(function() {
    const anthem = document.getElementById('click-sound');
    let isPlaying = false;

    // ATDS (Anti-Traitor Democratic System)
    $('#helldivers-logo').click(function() {
        if (isPlaying) {
            // 
            $('body').append('<div class="red-warning">You interrupted the SuperEarth Anthem! The democracy officer has been dispatched for your re-education!</div>');
            anthem.pause();
            anthem.currentTime = 0;
            isPlaying = false;

            // Timer for test purposes (In real application, need to implement the blocking and notifying authorities)
            setTimeout(function() {
                $('.red-warning').remove();
            }, 10000);
        } else {
            anthem.play();
            isPlaying = true;
        }

        // Reset isPlaying when the anthem ends
        anthem.onended = function() {
            isPlaying = false;
        };
    });

    // Special effects
    // Effect 1: fade in the intro section when the page loads
    $('.intro').hide().fadeIn(2000);

    // Effect 2: Slide toggle the features section on button click
$('<button class="toggle-features">More</button>').insertBefore('.features');
    $('.toggle-features').click(function() {
        $('.features').slideToggle(1000);
    });

    // Effect 3: Change the background color of the footer on hover
    $('footer').hover(
        function() {
            $(this).css('background-color', '#b8860b');
        },
        function() {
            $(this).css('background-color', '#1e3c72');
        }
    );

    // Animation: Animate the logo on click
    $('#helldivers-logo').click(function() {
        $(this).animate({
            width: '200px'
        }, 500).animate({
            width: '150px'
        }, 500);
    });
});
