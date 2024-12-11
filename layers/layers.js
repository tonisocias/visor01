var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_allotjaments_turistics_mallorca_1 = new ol.format.GeoJSON();
var features_allotjaments_turistics_mallorca_1 = format_allotjaments_turistics_mallorca_1.readFeatures(json_allotjaments_turistics_mallorca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allotjaments_turistics_mallorca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allotjaments_turistics_mallorca_1.addFeatures(features_allotjaments_turistics_mallorca_1);
var lyr_allotjaments_turistics_mallorca_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_allotjaments_turistics_mallorca_1, 
                style: style_allotjaments_turistics_mallorca_1,
                popuplayertitle: "allotjaments_turistics_mallorca",
                interactive: true,
    title: 'allotjaments_turistics_mallorca<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_0.png" /> Agroturisme<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_1.png" /> Alberg<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_2.png" /> Apartaments turístics<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_3.png" /> Camping<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_4.png" /> Casa dhostes<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_5.png" /> Fonda<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_6.png" /> Hostal<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_7.png" /> Hostal residència<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_8.png" /> Hostatgeria<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_9.png" /> Hotel<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_10.png" /> Hotel apartament<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_11.png" /> Hotel rural<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_12.png" /> Pensió<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_13.png" /> Turisme dinterior<br />\
    <img src="styles/legend/allotjaments_turistics_mallorca_1_14.png" /> <br />'
        });
var format_habitatges_turistics_mallorca_2 = new ol.format.GeoJSON();
var features_habitatges_turistics_mallorca_2 = format_habitatges_turistics_mallorca_2.readFeatures(json_habitatges_turistics_mallorca_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_habitatges_turistics_mallorca_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_habitatges_turistics_mallorca_2.addFeatures(features_habitatges_turistics_mallorca_2);
var lyr_habitatges_turistics_mallorca_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_habitatges_turistics_mallorca_2, 
                style: style_habitatges_turistics_mallorca_2,
                popuplayertitle: "habitatges_turistics_mallorca",
                interactive: true,
    title: 'habitatges_turistics_mallorca<br />\
    <img src="styles/legend/habitatges_turistics_mallorca_2_0.png" /> Comercialitzador destades<br />\
    <img src="styles/legend/habitatges_turistics_mallorca_2_1.png" /> Empresari dhabitatge<br />\
    <img src="styles/legend/habitatges_turistics_mallorca_2_2.png" /> Estada turística en habitatge (ETV)<br />\
    <img src="styles/legend/habitatges_turistics_mallorca_2_3.png" /> Estada turística en habitatge (ETV60)<br />\
    <img src="styles/legend/habitatges_turistics_mallorca_2_4.png" /> Estada turística en habitatge (ETVPL)<br />\
    <img src="styles/legend/habitatges_turistics_mallorca_2_5.png" /> Habitatge turístic de vacances<br />\
    <img src="styles/legend/habitatges_turistics_mallorca_2_6.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_allotjaments_turistics_mallorca_1.setVisible(true);lyr_habitatges_turistics_mallorca_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_allotjaments_turistics_mallorca_1,lyr_habitatges_turistics_mallorca_2];
lyr_allotjaments_turistics_mallorca_1.set('fieldAliases', {'Signatura': 'Signatura', 'Denominació comercial': 'Denominació comercial', 'Grup': 'Grup', 'Subgrup': 'Subgrup', 'Categoria': 'Categoria', 'Inici d\'activitat': 'Inici d\'activitat', 'Estat': 'Estat', 'Municipi': 'Municipi', 'Localitat': 'Localitat', 'Direcció': 'Direcció', 'Memoria descriptiva': 'Memoria descriptiva', 'Places': 'Places', 'Excepcions ratio turístic': 'Excepcions ratio turístic', 'Superfície': 'Superfície', 'Hotel de ciutat': 'Hotel de ciutat', 'Unitats': 'Unitats', 'Explotador/s': 'Explotador/s', });
lyr_habitatges_turistics_mallorca_2.set('fieldAliases', {'Signatura': 'Signatura', 'Denominació comercial': 'Denominació comercial', 'Grup': 'Grup', 'Subgrup': 'Subgrup', 'Categoria': 'Categoria', 'Inici d\'activitat': 'Inici d\'activitat', 'Estat': 'Estat', 'Municipi': 'Municipi', 'Localitat': 'Localitat', 'Direcció': 'Direcció', 'Mesos de comercialització': 'Mesos de comercialització', 'Places': 'Places', 'Tipus de vivenda turística ETV': 'Tipus de vivenda turística ETV', 'Tipus de vivenda turística': 'Tipus de vivenda turística', 'Tipus de vivenda turística ETV plurifamiliar': 'Tipus de vivenda turística ETV plurifamiliar', 'Tipus de vivenda turística ETV amb limitació d\'us': 'Tipus de vivenda turística ETV amb limitació d\'us', 'Unitats': 'Unitats', 'Nombre de banys': 'Nombre de banys', 'Explotador/s': 'Explotador/s', });
lyr_allotjaments_turistics_mallorca_1.set('fieldImages', {'Signatura': 'TextEdit', 'Denominació comercial': 'TextEdit', 'Grup': 'TextEdit', 'Subgrup': 'TextEdit', 'Categoria': 'TextEdit', 'Inici d\'activitat': 'TextEdit', 'Estat': 'TextEdit', 'Municipi': 'TextEdit', 'Localitat': 'TextEdit', 'Direcció': 'TextEdit', 'Memoria descriptiva': 'TextEdit', 'Places': 'TextEdit', 'Excepcions ratio turístic': 'TextEdit', 'Superfície': 'TextEdit', 'Hotel de ciutat': 'TextEdit', 'Unitats': 'TextEdit', 'Explotador/s': 'TextEdit', });
lyr_habitatges_turistics_mallorca_2.set('fieldImages', {'Signatura': 'TextEdit', 'Denominació comercial': 'TextEdit', 'Grup': 'TextEdit', 'Subgrup': 'TextEdit', 'Categoria': 'TextEdit', 'Inici d\'activitat': 'TextEdit', 'Estat': 'TextEdit', 'Municipi': 'TextEdit', 'Localitat': 'TextEdit', 'Direcció': 'TextEdit', 'Mesos de comercialització': 'TextEdit', 'Places': 'TextEdit', 'Tipus de vivenda turística ETV': 'TextEdit', 'Tipus de vivenda turística': 'TextEdit', 'Tipus de vivenda turística ETV plurifamiliar': 'TextEdit', 'Tipus de vivenda turística ETV amb limitació d\'us': 'TextEdit', 'Unitats': 'TextEdit', 'Nombre de banys': 'TextEdit', 'Explotador/s': 'TextEdit', });
lyr_allotjaments_turistics_mallorca_1.set('fieldLabels', {'Signatura': 'no label', 'Denominació comercial': 'no label', 'Grup': 'no label', 'Subgrup': 'no label', 'Categoria': 'no label', 'Inici d\'activitat': 'no label', 'Estat': 'no label', 'Municipi': 'no label', 'Localitat': 'no label', 'Direcció': 'no label', 'Memoria descriptiva': 'no label', 'Places': 'no label', 'Excepcions ratio turístic': 'no label', 'Superfície': 'no label', 'Hotel de ciutat': 'no label', 'Unitats': 'no label', 'Explotador/s': 'no label', });
lyr_habitatges_turistics_mallorca_2.set('fieldLabels', {'Signatura': 'no label', 'Denominació comercial': 'no label', 'Grup': 'no label', 'Subgrup': 'no label', 'Categoria': 'no label', 'Inici d\'activitat': 'no label', 'Estat': 'no label', 'Municipi': 'no label', 'Localitat': 'no label', 'Direcció': 'no label', 'Mesos de comercialització': 'no label', 'Places': 'no label', 'Tipus de vivenda turística ETV': 'no label', 'Tipus de vivenda turística': 'no label', 'Tipus de vivenda turística ETV plurifamiliar': 'no label', 'Tipus de vivenda turística ETV amb limitació d\'us': 'no label', 'Unitats': 'no label', 'Nombre de banys': 'no label', 'Explotador/s': 'no label', });
lyr_habitatges_turistics_mallorca_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});