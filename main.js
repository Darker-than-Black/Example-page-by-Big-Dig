$('.dropdown-submenu > a').on("click", function(e) {
    var submenu = $(this);
    $('.dropdown-submenu .dropdown-menu').removeClass('show');
    submenu.next('.dropdown-menu').addClass('show');
    e.stopPropagation();
});
$('.dropdown').on("hidden.bs.dropdown", function() {
    $('.dropdown-menu.show').removeClass('show');
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items: 1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});