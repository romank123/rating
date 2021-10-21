console.log('tab.js run..')
$(function () {
    let tab = $('.tab-pane-up > div');
    tab.filter(':first').show();

    $('.nav.nav-tabs a').click(function () {

        let getvalue = $(this).attr('data-id');

        $('.tab-pane-up > div').each((index, value) => {

            let getattr = $(value).attr('data-id');

                if (getattr == getvalue) {

                    $(value).show()

                } else {

                    $(value).hide()
                }
        });

    });

});