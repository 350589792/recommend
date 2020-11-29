(function($) {
    "use strict";

    /*-------------------------------------
        Google Map
    -------------------------------------*/
    if ($("#gmap-basic").length) {
        var map = new GMaps({
            el: '#gmap-basic',
            lat: -37.81618,
            lng: 144.95692,
            zoomControl: true,
            zoomControlOpt: {
                style: 'SMALL',
                position: 'TOP_LEFT'
            },
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false
        });
    }

    if ($("#gmap-context").length) {
        var map = new GMaps({
            el: '#gmap-context',
            lat: -37.81618,
            lng: 144.95692,
        });
        map.setContextMenu({
            control: 'map',
            options: [{
                title: 'Add marker',
                name: 'add_marker',
                action: function(e) {
                    this.addMarker({
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng(),
                        title: 'New marker'
                    });
                    this.hideContextMenu();
                }
            }, {
                title: 'Center here',
                name: 'center_here',
                action: function(e) {
                    this.setCenter(e.latLng.lat(), e.latLng.lng());
                }
            }]
        });

        map.setContextMenu({
            control: 'marker',
            options: [{
                title: 'Center here',
                name: 'center_here',
                action: function(e) {
                    this.setCenter(e.latLng.lat(), e.latLng.lng());
                }
            }]
        });
    }

    if ($("#gmap-marker").length) {
        var map = new GMaps({
            el: '#gmap-marker',
            lat: -37.81618,
            lng: 144.95692,
        });
        map.addMarker({
            lat: -37.81618,
            lng: 144.95692,
            title: 'Marker with InfoWindow',
            infoWindow: {
                content: '<p>HTML Content</p>'
            }
        });
    }

    if ($("#gmap-control").length) {
        var map = new GMaps({
            el: '#gmap-control',
            zoom: 16,
            lat: -37.81618,
            lng: 144.95692,
        });
        map.addControl({
            position: 'top_right',
            content: 'Geolocation',
            style: {
                margin: '5px',
                padding: '5px 6px',
                border: 'solid 1px #717B87',
                background: '#fff'
            },
            events: {
                click: function() {
                    GMaps.geolocate({
                        success: function(position) {
                            map.setCenter(position.coords.latitude, position.coords.longitude);
                        },
                        error: function(error) {
                            alert('Geolocation failed: ' + error.message);
                        },
                        not_supported: function() {
                            alert("Your browser does not support geolocation");
                        }
                    });
                }
            }
        });
    }

})(jQuery);