var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LineJateng_1 = new ol.format.GeoJSON();
var features_LineJateng_1 = format_LineJateng_1.readFeatures(json_LineJateng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineJateng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineJateng_1.addFeatures(features_LineJateng_1);
var lyr_LineJateng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineJateng_1, 
                style: style_LineJateng_1,
                popuplayertitle: 'Line Jateng',
                interactive: true,
                title: '<img src="styles/legend/LineJateng_1.png" /> Line Jateng'
            });
var format_TPADarurat_2 = new ol.format.GeoJSON();
var features_TPADarurat_2 = format_TPADarurat_2.readFeatures(json_TPADarurat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPADarurat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPADarurat_2.addFeatures(features_TPADarurat_2);
var lyr_TPADarurat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPADarurat_2, 
                style: style_TPADarurat_2,
                popuplayertitle: 'TPA Darurat',
                interactive: true,
                title: '<img src="styles/legend/TPADarurat_2.png" /> TPA Darurat'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LineJateng_1.setVisible(true);lyr_TPADarurat_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LineJateng_1,lyr_TPADarurat_2];
lyr_LineJateng_1.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_TPADarurat_2.set('fieldAliases', {'TPA/TPST': 'TPA/TPST', 'x': 'x', 'y': 'y', 'Ket.': 'Ket.', 'Ket. (2)': 'Ket. (2)', 'Dok.Survei': 'Dok.Survei', });
lyr_LineJateng_1.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_TPADarurat_2.set('fieldImages', {'TPA/TPST': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Ket.': 'ExternalResource', 'Ket. (2)': 'ExternalResource', 'Dok.Survei': 'ExternalResource', });
lyr_LineJateng_1.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_TPADarurat_2.set('fieldLabels', {'TPA/TPST': 'no label', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'Ket.': 'inline label - always visible', 'Ket. (2)': 'inline label - always visible', 'Dok.Survei': 'inline label - always visible', });
lyr_TPADarurat_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});