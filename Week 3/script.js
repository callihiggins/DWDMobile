var app = {
    initialize: function() {
        $('.growContent').click(function() {
            $(this).parent().addClass('tall-content');
        });
        $('.changePage').click(function() {
            if ($(this).data('nextPage')) {
                app.changePage($(this).data('nextPage'));
            } else {
                alert("You've reached the last page");
            }
        });
        $('.js-moveMe').click(function() {
            $(this).addClass('left');
        });
    },

    changePage: function(id) {
        console.log("change page");
        $('.page').each(function() {
            $(this).hide();
        });
        $(id).fadeIn();
    }
}
