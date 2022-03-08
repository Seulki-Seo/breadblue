$(function () {
    $(window).scroll(function () {
        let top_num = $(document).scrollTop();
        let top_cen = ($(window).height() - $(".quick_menu").height()) / 2
        $(".quick_menu").stop().animate({ top: top_num + top_cen }, 1000);

        $(".top").click(function () {
            $("html, body").stop().animate({ scrollTop: 0 }, 500);
        });
    });
});