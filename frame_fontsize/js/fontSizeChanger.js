$(function() {
    function changeFontSize(buttonID, className) {
        $('html').removeClass('f-small f-large');
        $('html').addClass(className);
        $('#f-size .current').removeClass('current'); // #f-size内の.currentクラスを削除
        $(buttonID).addClass('current');
        window.sessionStorage.setItem('CHSIZE', className); // セッションストレージに設定保存
    }

    // ページロード時にセッションストレージからフォントサイズを読み込み
    const storedSize = window.sessionStorage.getItem('CHSIZE');
    if (storedSize) {
        changeFontSize(`#f-size #${storedSize}`, storedSize);
    } else {
        changeFontSize('#f-small', 'f-small');	// デフォルト設定。「大」をデフォルトにしたい場合は('#f-large', 'f-large')に変更して下さい。
    }

    $('#f-size #f-small').click(function() {
        changeFontSize('#f-small', 'f-small');
    });

    $('#f-size #f-large').click(function() {
        changeFontSize('#f-large', 'f-large');
    });
});
