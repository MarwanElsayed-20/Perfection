$(function() {

// header height

var header = $(".header")

if ($(window).width() <=  991.98) {
  header.height($(window).height() +15)
} else {
  header.height($(window).height())
}

$(window).resize(function () {
  $(".header").height($(window).height());
});

// show info in nav buttons

$(".header .nav-buttons .fa-address-card").hover(function () {
  $(".header .nav-buttons .about").fadeIn(500)
},
function () {
  $(".header .nav-buttons .about").fadeOut(500)
});

$(".header .nav-buttons .fa-cogs").hover(function () {
  $(".header .nav-buttons .feature").fadeIn(500)
},
function () {
  $(".header .nav-buttons .feature").fadeOut(500)
});

$(".header .nav-buttons .fa-share-alt-square").hover(function () {
  $(".header .nav-buttons .contact-me").fadeIn(500)
},
function () {
  $(".header .nav-buttons .contact-me").fadeOut(500)
});

// show header content

// $(".header .brand, .header .nav-buttons").fadeIn(1500);

// navigate to sections

$(".header .nav-buttons i").click(function () {
  $("html, body").animate({
    scrollTop: $($(this).data('class')).offset().top
  }, 1000);
});

$(".navbar .collapse .navbar-nav a").click(function () {
  $("html, body").animate({
    scrollTop: $($(this).data('class')).offset().top
  }, 1000);
});

$(".header .fa-sort-down").click(function () {
  $('html, body').animate({
    scrollTop: $(".profile").offset().top
  }, 1000);
});





});
