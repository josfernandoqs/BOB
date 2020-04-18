var wms_layers = [];


        var lyr_cartotopo_0 = new ol.layer.Tile({
            'title': 'carto topo',
            'type': 'base',
            'opacity': 0.579000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Casos_Covid19_1704_1 = new ol.format.GeoJSON();
var features_Casos_Covid19_1704_1 = format_Casos_Covid19_1704_1.readFeatures(json_Casos_Covid19_1704_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casos_Covid19_1704_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casos_Covid19_1704_1.addFeatures(features_Casos_Covid19_1704_1);
var lyr_Casos_Covid19_1704_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casos_Covid19_1704_1, 
                style: style_Casos_Covid19_1704_1,
                interactive: true,
    title: 'Casos_Covid19_1704<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_0.png" /> 0<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_1.png" /> 1<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_2.png" /> 2<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_3.png" /> 3<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_4.png" /> 4<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_5.png" /> 5<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_6.png" /> 6<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_7.png" /> 7<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_8.png" /> 8<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_9.png" /> 11<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_10.png" /> 12<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_11.png" /> 16<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_12.png" /> 20<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_13.png" /> 25<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_14.png" /> 27<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_15.png" /> 29<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_16.png" /> 47<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_17.png" /> 69<br />\
    <img src="styles/legend/Casos_Covid19_1704_1_18.png" /> 117<br />'
        });

lyr_cartotopo_0.setVisible(true);lyr_Casos_Covid19_1704_1.setVisible(true);
var layersList = [lyr_cartotopo_0,lyr_Casos_Covid19_1704_1];
lyr_Casos_Covid19_1704_1.set('fieldAliases', {'NOM_DEP': 'NOM_DEP', 'NOM_MUN': 'NOM_MUN', 'Confirmado': 'Confirmado', 'Decesos': 'Decesos', });
lyr_Casos_Covid19_1704_1.set('fieldImages', {'NOM_DEP': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Confirmado': 'TextEdit', 'Decesos': 'TextEdit', });
lyr_Casos_Covid19_1704_1.set('fieldLabels', {'NOM_DEP': 'inline label', 'NOM_MUN': 'inline label', 'Confirmado': 'inline label', 'Decesos': 'inline label', });
lyr_Casos_Covid19_1704_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});