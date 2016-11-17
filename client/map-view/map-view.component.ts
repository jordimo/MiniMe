import {Component} from "@angular/core";
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


@Component({
    selector:'map-view',
    template: require('./map-view.component.html'),
})

export class MapViewComponent{

    constructor () {

        mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGltbyIsImEiOiJjaXZjaGFmemYwMGZ6Mm9sYmx0YWZ5ZTNjIn0.hZOxqX-9DGuz43eSK9eRkA';
    }

    ngOnInit() {

        let myMap = new mapboxgl.Map({
            container:  'map',
            style:      'mapbox://styles/jordimo/civchdkqp005o2imogg0g529u'
        });
    }

}
