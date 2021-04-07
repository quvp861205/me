/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

function cloudTags()
{
	const myTags = [
      'JavaScript', 'CSS','HTML',
      'Angular', 'NodeJs', 'Phalcon',
      'Python', 'Php', 'Flutter',
      'c#', 'c++', 'Java', 'Bootstrap',
	  'WebServices', 'Api Rest', 'Sql Server',
	  'PostgreSql', 'Oracle', 'MySql', 'Visual Basic',
	  'Gsuite', 'CSS Grid', 'Linux', 'Shell', 'MicroServicios',
	  'Backend', 'Frontend', 'Autentificacion', 'Pentesting',
	  'Firebase', 'MongoDb', 'Npm', 'PWA'
	];

	//var tagCloud = TagCloud('.cloudTag', myTags);

	var tagCloud = TagCloud('.cloudTag', myTags,{

		// radius in px
		radius: 175,

		// animation speed
		// slow, normal, fast
		maxSpeed: 'fast',
		initSpeed: 'normal',

		// 0 = top
		// 90 = left
		// 135 = right-bottom
		direction: 135,
		
		// interact with cursor move on mouse out
		keep: true
		
	});

	myTags = myTags.concat(['MoreTag']);
	tagCloud.update(myTags);
}
cloudTags();

