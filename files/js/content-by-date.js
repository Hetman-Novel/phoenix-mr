jQuery(document).ready(function($) {

	$('#js-tabs-date .select__item').click(function() {
        $('#js-tabs-date .select__item').removeClass('current-lang');
        $(this).addClass('current-lang');
        $('.js-date-content').removeClass('show-date-content');
        let id = $(this).attr('data-select-id');
        $('[data-content-id="'+id+'"]').addClass('show-date-content');
    });
});