(function($) {
    "use strict";

    /*-------------------------------------
      Vector Map 
    -------------------------------------*/
    if ($.fn.vectorMap !== undefined) {
        $('#world-map').vectorMap({
            map: 'world_mill',
            zoomButtons: false,
            backgroundColor: 'transparent',

            regionStyle: {
                initial: {
                    fill: '#e8ecff'
                }
            },
            focusOn: {
                x: 0,
                y: 0,
                scale: 1
            },
            series: {
                regions: [{
                    values: {
                        CA: '#e8ecff',
                        RU: '#c8d5f4',
                        US: '#c8d5f4',
                        IT: '#c8d5f4',
                        AU: '#e8ecff'
                    }
                }]
            }
        });
    }

})(jQuery);