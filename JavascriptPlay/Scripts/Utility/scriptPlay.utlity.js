scriptPlay.utility = (function () {

    function animateOpen(elementId, callback) {

        var docWindow = $('html, body'); // document window - used for sliding the scroll bar
        var animateElement = $("#" + elementId); //the dom element to slide down

        $(animateElement).slideDown('fast', 'swing', function () {

            // check to see the entire div is on screen...
            if (!$(animateElement).isOnScreen()) {

                // if the entire div is not on screen, let's auto-scroll the scollbar until it is..
                $(docWindow).animate({
                    scrollTop: $(animateElement).offset().top + $('window').height()
                },
                {
                    duration: 700,
                    step: function () {

                        // re-check if entire div is on screen for each animation step...
                        if ($(animateElement).isOnScreen()) {

                            $(docWindow).clearQueue().stop();   //If the entire div is on screen, then let's kill the animation.

                            if (callback) {
                                callback();
                            }
                        }
                    },
                    complete: function () {
                        if (callback) {
                            callback();
                        }
                    }
                });
            } else {
                if (callback) {
                    callback();
                }
            }
        });
    }

    function animateClose(elementId, callback) {

        $("#" + elementId).slideUp('fast', 'swing', function () {

            if (callback) {
                callback();
            }
        });
    }

    function clone(object) {
        return $.extend(true, {}, object);
    }

    function reset($form) {
        ($form.validate()).resetForm();
        $(".error").removeClass("error");        
    }

    return {

        animateOpen: animateOpen,
        animateClose: animateClose,
        clone: clone,
        reset: reset
    }

}(scriptPlay.utility || {}));