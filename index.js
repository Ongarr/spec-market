import smoothscroll from 'smoothscroll-polyfill';

 
// kick off the polyfill!
smoothscroll.polyfill();

console.log('hello world')

var mobileMenu = function(){
    $('#hamburger, nav ul li a').click(function(){
        $('#hamburger').toggleClass('open');
        $('ul').toggleClass('mobile-menu');
        $('#hamburger').toggleClass('fixed');
    });
};

// var closeMenu = function (){
// 	$('nav ul li a').click(function(){
// 		$('#hamburger').click().addClass('open');
// 		$('#hamburger').click().removeClass('fixed');
// 		$('ul').click().removeClass('mobile-menu');
// 	});
// };


// closeMenu();
mobileMenu();

