//  Window Scroll Events
$(window).on('scroll', function() {
    // Change Navbar Background
    if (window.scrollY <= 80) {
        $('.navbar-custom').addClass('on-top')
    } else {
        $('.navbar-custom').removeClass('on-top')
    }
    // Show/Hide Go To Top Buttom on Scroll
    if (window.scrollY >= 1500) {
        $('#go-to-top').show()
    } else {
        $('#go-to-top').hide()
    }
});
// Change if user reload page on top
// Change Navbar Background
if (window.scrollY <= 80) {
    $('.navbar-custom').addClass('on-top')
}
// Show Go To Top Button if under 1500px
if (window.scrollY >= 1500) {
    $('#go-to-top').show()
}
// Go To Top Event
$('#go-to-top').on('click', function(e) {
    e.preventDefault()
    $('html, body').animate({
        scrollTop: 0
    }, window.scrollY / 4)
})
// Mood Toggler
var moodToggler = document.getElementById('mood-toggler');
var bodyTag = document.body
moodToggler.onclick = function(e){
    e.preventDefault();
    bodyTag.classList.toggle('dark')
    if(bodyTag.className.includes('dark')){
        moodToggler.firstElementChild.src = "resources/images/eclipse.svg"
    }else{
        moodToggler.firstElementChild.src = "resources/images/half-moon.svg"
    }
}