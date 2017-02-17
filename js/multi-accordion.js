$('.entry-icon').click(function (e) {
    $('.entry-icon').removeClass('active'); // Hide active class when .entry-content is hidden
    $('.entry-content').slideUp(); // Hide entry content when open and button clicked.
    //If entry content is hidden, the click will invoke by finding the content, add a class of active to the button
    //and toggle between the entry-content elements.
    if ($(this).parent().find('.entry-content').is(":hidden") == true) {
        $(this).addClass('active');
        $(this).parent().find('.entry-content').slideToggle();
    }
});
//by default, the entry content is hidden.
$('.entry-content').hide();
// This line keeps the last container open by default until another accordion option is selected
$('.container').find('.entry-content').eq(3).show();