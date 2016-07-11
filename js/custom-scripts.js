$(document).ready(function () {

    /** nav-menu script **/

    $('.nav-icon').click(function() {
        $('nav ul li').slideToggle();
    });

    /** the end of the nav-menu script **/

    /** show/hide courses **/

    $('.courses>button').click(function() {
        $(this).toggleClass('active');
        $(this).find('span').toggleClass('visible');
        $(this).siblings('ul').find('.hidden').slideToggle(400);
    });

    /** end of script for courses**/

});
