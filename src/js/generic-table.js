function attachScrollHandler() {
    $('.table-responsive').each(function () {
        const $tableWrapper = $(this);
        const $thead = $tableWrapper.find('thead');

        if ($thead.length === 0) return;

        $tableWrapper.off('scroll');
        $tableWrapper.on('scroll', function () {
            const scrollTop = $tableWrapper.scrollTop();

            if (scrollTop === 0) {
                $thead.css({
                    'top': '0px',
                    'position': ''
                });
            } else {
                $thead.css({
                    'top': '-1px',
                    'position': 'sticky'
                });
            }
        });
    });
}
