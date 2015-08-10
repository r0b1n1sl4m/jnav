/*
Plugin Name: jNav
Version: 1.0
Plugin URI: https://github.com/r0b1n1sl4m
Description: jNav is a simply very good solution for your responsive site navigation. It's will help you to add a slick mobile nab on your site.
Author Name: Robin Islam
Author URI: http://codefairbd.com
*/

(function ($) {

    // start plugin functions
    $.fn.jNav = function (options) {

        // extend options with settings array with default values
        var settings = $.extend({
            clickbar: null,
            skin: "default",
            speed: "fast",
            closedSymbol: '&#9660;',
            openedSymbol: '&#9658;'
        }, options);

        return this.each(function () {

            // define plugin id
            var mainobj = $(this);

            // create function object with plugin method
            var navMethod = {

                // initial nav ul
                Init: function (ul, bar) {
                    if (ul !== null && ul !== '') {
                        $(ul).wrap("<div class='jnav_menu_blade " + settings.skin + "'></div>");
                        $(ul).addClass("jnav_wrapper");
                    }
                    if (bar !== null && bar !== '') {
                        $(bar).addClass("jnav_clickbar");
                    }
                },
                // initial secodary nav li
                InitSecondary: function (li) {
                    if (li !== null && li !== '') {
                        $(li).addClass("jnav-multilevel-nav");
                        $(li).prepend("<span class='jnav-toggle' active='1'>" + settings.openedSymbol + "</span>");
                    }
                },
                // toggle nav function
                ToggleNav: function (ul, speed) {
                    if (ul !== null && speed !== null) {
                        $(ul).slideToggle(settings.speed);
                    }
                }
            };

            // check if there is any element exists with plugin id
            if ($(this).length > 0) {

                // call initial method to add class and wrap with div
                navMethod.Init($(this), settings.clickbar);

                // togge nav on click
                if (settings.clickbar) {
                    $(settings.clickbar).click(function () {
                        navMethod.ToggleNav(mainobj, settings.speed);
                    });
                }

            }

        });

    }

})(jQuery);