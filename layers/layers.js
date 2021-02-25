var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoberturaAlcantarillado_1 = new ol.format.GeoJSON();
var features_CoberturaAlcantarillado_1 = format_CoberturaAlcantarillado_1.readFeatures(json_CoberturaAlcantarillado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturaAlcantarillado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaAlcantarillado_1.addFeatures(features_CoberturaAlcantarillado_1);
var lyr_CoberturaAlcantarillado_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoberturaAlcantarillado_1,
maxResolution:42.00669922839295,
 
                style: style_CoberturaAlcantarillado_1,
                interactive: false,
    title: 'Cobertura Alcantarillado<br />\
    <img src="styles/legend/CoberturaAlcantarillado_1_0.png" /> 0 - 20<br />\
    <img src="styles/legend/CoberturaAlcantarillado_1_1.png" /> 20 - 40<br />\
    <img src="styles/legend/CoberturaAlcantarillado_1_2.png" /> 40 - 60<br />\
    <img src="styles/legend/CoberturaAlcantarillado_1_3.png" /> 60 - 80<br />\
    <img src="styles/legend/CoberturaAlcantarillado_1_4.png" /> 80 - 100<br />'
        });
var format_CoberturaAcueducto_2 = new ol.format.GeoJSON();
var features_CoberturaAcueducto_2 = format_CoberturaAcueducto_2.readFeatures(json_CoberturaAcueducto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturaAcueducto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaAcueducto_2.addFeatures(features_CoberturaAcueducto_2);
var lyr_CoberturaAcueducto_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoberturaAcueducto_2,
maxResolution:42.00669922839295,
 
                style: style_CoberturaAcueducto_2,
                interactive: false,
    title: 'Cobertura Acueducto<br />\
    <img src="styles/legend/CoberturaAcueducto_2_0.png" /> 0 - 20<br />\
    <img src="styles/legend/CoberturaAcueducto_2_1.png" /> 20 - 40<br />\
    <img src="styles/legend/CoberturaAcueducto_2_2.png" /> 40 - 60<br />\
    <img src="styles/legend/CoberturaAcueducto_2_3.png" /> 60 - 80<br />\
    <img src="styles/legend/CoberturaAcueducto_2_4.png" /> 80 - 100<br />'
        });
var format_CoberturaEnergia_3 = new ol.format.GeoJSON();
var features_CoberturaEnergia_3 = format_CoberturaEnergia_3.readFeatures(json_CoberturaEnergia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturaEnergia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaEnergia_3.addFeatures(features_CoberturaEnergia_3);
var lyr_CoberturaEnergia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoberturaEnergia_3,
maxResolution:42.00669922839295,
 
                style: style_CoberturaEnergia_3,
                interactive: false,
    title: 'Cobertura Energia<br />\
    <img src="styles/legend/CoberturaEnergia_3_0.png" /> 0 - 20<br />\
    <img src="styles/legend/CoberturaEnergia_3_1.png" /> 20 - 40<br />\
    <img src="styles/legend/CoberturaEnergia_3_2.png" /> 40 - 60<br />\
    <img src="styles/legend/CoberturaEnergia_3_3.png" /> 60 - 80<br />\
    <img src="styles/legend/CoberturaEnergia_3_4.png" /> 80 - 100<br />'
        });
var format_CoberturaInternet_4 = new ol.format.GeoJSON();
var features_CoberturaInternet_4 = format_CoberturaInternet_4.readFeatures(json_CoberturaInternet_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturaInternet_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaInternet_4.addFeatures(features_CoberturaInternet_4);
var lyr_CoberturaInternet_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoberturaInternet_4,
maxResolution:42.00669922839295,
 
                style: style_CoberturaInternet_4,
                interactive: false,
    title: 'Cobertura Internet<br />\
    <img src="styles/legend/CoberturaInternet_4_0.png" /> 0 - 20<br />\
    <img src="styles/legend/CoberturaInternet_4_1.png" /> 20 - 40<br />\
    <img src="styles/legend/CoberturaInternet_4_2.png" /> 40 - 60<br />\
    <img src="styles/legend/CoberturaInternet_4_3.png" /> 60 - 80<br />\
    <img src="styles/legend/CoberturaInternet_4_4.png" /> 80 - 100<br />'
        });
var format_Privacion_RecoleccionBasura_5 = new ol.format.GeoJSON();
var features_Privacion_RecoleccionBasura_5 = format_Privacion_RecoleccionBasura_5.readFeatures(json_Privacion_RecoleccionBasura_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_RecoleccionBasura_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_RecoleccionBasura_5.addFeatures(features_Privacion_RecoleccionBasura_5);
var lyr_Privacion_RecoleccionBasura_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_RecoleccionBasura_5,
maxResolution:42.00669922839295,
 
                style: style_Privacion_RecoleccionBasura_5,
                interactive: false,
    title: 'Privacion_RecoleccionBasura<br />\
    <img src="styles/legend/Privacion_RecoleccionBasura_5_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_RecoleccionBasura_5_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_RecoleccionBasura_5_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_RecoleccionBasura_5_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_RecoleccionBasura_5_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_RecoleccionBasura_5_5.png" /> 80 - 100<br />'
        });
var format_Privacion_Energia_6 = new ol.format.GeoJSON();
var features_Privacion_Energia_6 = format_Privacion_Energia_6.readFeatures(json_Privacion_Energia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_Energia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_Energia_6.addFeatures(features_Privacion_Energia_6);
var lyr_Privacion_Energia_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_Energia_6,
maxResolution:42.00669922839295,
 
                style: style_Privacion_Energia_6,
                interactive: false,
    title: 'Privacion_Energia<br />\
    <img src="styles/legend/Privacion_Energia_6_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_Energia_6_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_Energia_6_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_Energia_6_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_Energia_6_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_Energia_6_5.png" /> 80 - 100<br />'
        });
var format_Privacion_Alcantarillado_7 = new ol.format.GeoJSON();
var features_Privacion_Alcantarillado_7 = format_Privacion_Alcantarillado_7.readFeatures(json_Privacion_Alcantarillado_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_Alcantarillado_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_Alcantarillado_7.addFeatures(features_Privacion_Alcantarillado_7);
var lyr_Privacion_Alcantarillado_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_Alcantarillado_7,
maxResolution:42.00669922839295,
 
                style: style_Privacion_Alcantarillado_7,
                interactive: false,
    title: 'Privacion_Alcantarillado<br />\
    <img src="styles/legend/Privacion_Alcantarillado_7_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_Alcantarillado_7_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_Alcantarillado_7_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_Alcantarillado_7_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_Alcantarillado_7_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_Alcantarillado_7_5.png" /> 80 - 100<br />'
        });
var format_Privacion_Acueducto_8 = new ol.format.GeoJSON();
var features_Privacion_Acueducto_8 = format_Privacion_Acueducto_8.readFeatures(json_Privacion_Acueducto_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_Acueducto_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_Acueducto_8.addFeatures(features_Privacion_Acueducto_8);
var lyr_Privacion_Acueducto_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_Acueducto_8,
maxResolution:42.00669922839295,
 
                style: style_Privacion_Acueducto_8,
                interactive: false,
    title: 'Privacion_Acueducto<br />\
    <img src="styles/legend/Privacion_Acueducto_8_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_Acueducto_8_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_Acueducto_8_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_Acueducto_8_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_Acueducto_8_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_Acueducto_8_5.png" /> 80 - 100<br />'
        });
var format_Privacion_Cocina_9 = new ol.format.GeoJSON();
var features_Privacion_Cocina_9 = format_Privacion_Cocina_9.readFeatures(json_Privacion_Cocina_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_Cocina_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_Cocina_9.addFeatures(features_Privacion_Cocina_9);
var lyr_Privacion_Cocina_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_Cocina_9,
maxResolution:42.00669922839295,
 
                style: style_Privacion_Cocina_9,
                interactive: false,
    title: 'Privacion_Cocina<br />\
    <img src="styles/legend/Privacion_Cocina_9_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_Cocina_9_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_Cocina_9_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_Cocina_9_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_Cocina_9_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_Cocina_9_5.png" /> 80 - 100<br />'
        });
var format_Privacion_HacinamientoMitigable_10 = new ol.format.GeoJSON();
var features_Privacion_HacinamientoMitigable_10 = format_Privacion_HacinamientoMitigable_10.readFeatures(json_Privacion_HacinamientoMitigable_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_HacinamientoMitigable_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_HacinamientoMitigable_10.addFeatures(features_Privacion_HacinamientoMitigable_10);
var lyr_Privacion_HacinamientoMitigable_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_HacinamientoMitigable_10,
maxResolution:42.00669922839295,
 
                style: style_Privacion_HacinamientoMitigable_10,
                interactive: false,
    title: 'Privacion_HacinamientoMitigable<br />\
    <img src="styles/legend/Privacion_HacinamientoMitigable_10_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_HacinamientoMitigable_10_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_HacinamientoMitigable_10_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_HacinamientoMitigable_10_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_HacinamientoMitigable_10_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_HacinamientoMitigable_10_5.png" /> 80 - 100<br />'
        });
var format_Privacion_Pisos_11 = new ol.format.GeoJSON();
var features_Privacion_Pisos_11 = format_Privacion_Pisos_11.readFeatures(json_Privacion_Pisos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_Pisos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_Pisos_11.addFeatures(features_Privacion_Pisos_11);
var lyr_Privacion_Pisos_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_Pisos_11,
maxResolution:42.00669922839295,
 
                style: style_Privacion_Pisos_11,
                interactive: false,
    title: 'Privacion_Pisos<br />\
    <img src="styles/legend/Privacion_Pisos_11_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_Pisos_11_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_Pisos_11_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_Pisos_11_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_Pisos_11_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_Pisos_11_5.png" /> 80 - 100<br />'
        });
var format_DeficitCualitativo_12 = new ol.format.GeoJSON();
var features_DeficitCualitativo_12 = format_DeficitCualitativo_12.readFeatures(json_DeficitCualitativo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeficitCualitativo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeficitCualitativo_12.addFeatures(features_DeficitCualitativo_12);
var lyr_DeficitCualitativo_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeficitCualitativo_12,
maxResolution:42.00669922839295,
 
                style: style_DeficitCualitativo_12,
                interactive: false,
    title: 'DeficitCualitativo<br />\
    <img src="styles/legend/DeficitCualitativo_12_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/DeficitCualitativo_12_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/DeficitCualitativo_12_2.png" /> 20 - 40<br />\
    <img src="styles/legend/DeficitCualitativo_12_3.png" /> 40 - 60<br />\
    <img src="styles/legend/DeficitCualitativo_12_4.png" /> 60 - 80<br />\
    <img src="styles/legend/DeficitCualitativo_12_5.png" /> 80 - 100<br />'
        });
var format_Privacion_HacinamientoNoMitigable_13 = new ol.format.GeoJSON();
var features_Privacion_HacinamientoNoMitigable_13 = format_Privacion_HacinamientoNoMitigable_13.readFeatures(json_Privacion_HacinamientoNoMitigable_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_HacinamientoNoMitigable_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_HacinamientoNoMitigable_13.addFeatures(features_Privacion_HacinamientoNoMitigable_13);
var lyr_Privacion_HacinamientoNoMitigable_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_HacinamientoNoMitigable_13,
maxResolution:42.00669922839295,
 
                style: style_Privacion_HacinamientoNoMitigable_13,
                interactive: false,
    title: 'Privacion_HacinamientoNoMitigable<br />\
    <img src="styles/legend/Privacion_HacinamientoNoMitigable_13_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_HacinamientoNoMitigable_13_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_HacinamientoNoMitigable_13_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_HacinamientoNoMitigable_13_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_HacinamientoNoMitigable_13_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_HacinamientoNoMitigable_13_5.png" /> 80 - 100<br />'
        });
var format_Privacion_Cohabitacion_14 = new ol.format.GeoJSON();
var features_Privacion_Cohabitacion_14 = format_Privacion_Cohabitacion_14.readFeatures(json_Privacion_Cohabitacion_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_Cohabitacion_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_Cohabitacion_14.addFeatures(features_Privacion_Cohabitacion_14);
var lyr_Privacion_Cohabitacion_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_Cohabitacion_14,
maxResolution:42.00669922839295,
 
                style: style_Privacion_Cohabitacion_14,
                interactive: false,
    title: 'Privacion_Cohabitacion<br />\
    <img src="styles/legend/Privacion_Cohabitacion_14_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_Cohabitacion_14_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_Cohabitacion_14_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_Cohabitacion_14_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_Cohabitacion_14_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_Cohabitacion_14_5.png" /> 80 - 100<br />'
        });
var format_Privacion_Paredes_15 = new ol.format.GeoJSON();
var features_Privacion_Paredes_15 = format_Privacion_Paredes_15.readFeatures(json_Privacion_Paredes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_Paredes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_Paredes_15.addFeatures(features_Privacion_Paredes_15);
var lyr_Privacion_Paredes_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_Paredes_15,
maxResolution:42.00669922839295,
 
                style: style_Privacion_Paredes_15,
                interactive: false,
    title: 'Privacion_Paredes<br />\
    <img src="styles/legend/Privacion_Paredes_15_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_Paredes_15_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_Paredes_15_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_Paredes_15_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_Paredes_15_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_Paredes_15_5.png" /> 80 - 100<br />'
        });
var format_Privacion_TipoVivienda_16 = new ol.format.GeoJSON();
var features_Privacion_TipoVivienda_16 = format_Privacion_TipoVivienda_16.readFeatures(json_Privacion_TipoVivienda_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privacion_TipoVivienda_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privacion_TipoVivienda_16.addFeatures(features_Privacion_TipoVivienda_16);
var lyr_Privacion_TipoVivienda_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privacion_TipoVivienda_16,
maxResolution:42.00669922839295,
 
                style: style_Privacion_TipoVivienda_16,
                interactive: false,
    title: 'Privacion_TipoVivienda<br />\
    <img src="styles/legend/Privacion_TipoVivienda_16_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/Privacion_TipoVivienda_16_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/Privacion_TipoVivienda_16_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Privacion_TipoVivienda_16_3.png" /> 40 - 60<br />\
    <img src="styles/legend/Privacion_TipoVivienda_16_4.png" /> 60 - 80<br />\
    <img src="styles/legend/Privacion_TipoVivienda_16_5.png" /> 80 - 100<br />'
        });
var format_DeficitCuantitativo_17 = new ol.format.GeoJSON();
var features_DeficitCuantitativo_17 = format_DeficitCuantitativo_17.readFeatures(json_DeficitCuantitativo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeficitCuantitativo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeficitCuantitativo_17.addFeatures(features_DeficitCuantitativo_17);
var lyr_DeficitCuantitativo_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeficitCuantitativo_17,
maxResolution:42.00669922839295,
 
                style: style_DeficitCuantitativo_17,
                interactive: false,
    title: 'DeficitCuantitativo<br />\
    <img src="styles/legend/DeficitCuantitativo_17_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/DeficitCuantitativo_17_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/DeficitCuantitativo_17_2.png" /> 20 - 40<br />\
    <img src="styles/legend/DeficitCuantitativo_17_3.png" /> 40 - 60<br />\
    <img src="styles/legend/DeficitCuantitativo_17_4.png" /> 60 - 80<br />\
    <img src="styles/legend/DeficitCuantitativo_17_5.png" /> 80 - 100<br />'
        });
var format_IPM_Manzana_18 = new ol.format.GeoJSON();
var features_IPM_Manzana_18 = format_IPM_Manzana_18.readFeatures(json_IPM_Manzana_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPM_Manzana_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPM_Manzana_18.addFeatures(features_IPM_Manzana_18);
var lyr_IPM_Manzana_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IPM_Manzana_18,
maxResolution:42.00669922839295,
 
                style: style_IPM_Manzana_18,
                interactive: false,
    title: 'IPM_Manzana<br />\
    <img src="styles/legend/IPM_Manzana_18_0.png" /> 0 - 0<br />\
    <img src="styles/legend/IPM_Manzana_18_1.png" /> 0 - 20<br />\
    <img src="styles/legend/IPM_Manzana_18_2.png" /> 20 - 40<br />\
    <img src="styles/legend/IPM_Manzana_18_3.png" /> 40 - 60<br />\
    <img src="styles/legend/IPM_Manzana_18_4.png" /> 60 - 80<br />\
    <img src="styles/legend/IPM_Manzana_18_5.png" /> 80 - 100<br />'
        });
var format_IPM_Clase_19 = new ol.format.GeoJSON();
var features_IPM_Clase_19 = format_IPM_Clase_19.readFeatures(json_IPM_Clase_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPM_Clase_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPM_Clase_19.addFeatures(features_IPM_Clase_19);
var lyr_IPM_Clase_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IPM_Clase_19,
maxResolution:112.01786460904783,
 minResolution:42.00669922839295,

                style: style_IPM_Clase_19,
                interactive: false,
    title: 'IPM_Clase<br />\
    <img src="styles/legend/IPM_Clase_19_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/IPM_Clase_19_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/IPM_Clase_19_2.png" /> 20 - 40<br />\
    <img src="styles/legend/IPM_Clase_19_3.png" /> 40 - 60<br />\
    <img src="styles/legend/IPM_Clase_19_4.png" /> 60 - 80<br />\
    <img src="styles/legend/IPM_Clase_19_5.png" /> 80 - 100<br />'
        });
var format_IPM_Municipio_20 = new ol.format.GeoJSON();
var features_IPM_Municipio_20 = format_IPM_Municipio_20.readFeatures(json_IPM_Municipio_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPM_Municipio_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPM_Municipio_20.addFeatures(features_IPM_Municipio_20);
var lyr_IPM_Municipio_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IPM_Municipio_20,
maxResolution:182.02902998970276,
 minResolution:112.01786460904783,

                style: style_IPM_Municipio_20,
                interactive: false,
    title: 'IPM_Municipio<br />\
    <img src="styles/legend/IPM_Municipio_20_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/IPM_Municipio_20_1.png" /> 0,1 - 20<br />\
    <img src="styles/legend/IPM_Municipio_20_2.png" /> 20 - 40<br />\
    <img src="styles/legend/IPM_Municipio_20_3.png" /> 40 - 60<br />\
    <img src="styles/legend/IPM_Municipio_20_4.png" /> 60 - 80<br />\
    <img src="styles/legend/IPM_Municipio_20_5.png" /> 80 - 100<br />'
        });
var format_Municipios_21 = new ol.format.GeoJSON();
var features_Municipios_21 = format_Municipios_21.readFeatures(json_Municipios_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_21.addFeatures(features_Municipios_21);
var lyr_Municipios_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_21, 
                style: style_Municipios_21,
                interactive: false,
                title: '<img src="styles/legend/Municipios_21.png" /> Municipios'
            });
var format_Departamento_22 = new ol.format.GeoJSON();
var features_Departamento_22 = format_Departamento_22.readFeatures(json_Departamento_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_22.addFeatures(features_Departamento_22);
var lyr_Departamento_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamento_22, 
                style: style_Departamento_22,
                interactive: false,
                title: '<img src="styles/legend/Departamento_22.png" /> Departamento'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CoberturaAlcantarillado_1.setVisible(false);lyr_CoberturaAcueducto_2.setVisible(false);lyr_CoberturaEnergia_3.setVisible(false);lyr_CoberturaInternet_4.setVisible(false);lyr_Privacion_RecoleccionBasura_5.setVisible(false);lyr_Privacion_Energia_6.setVisible(false);lyr_Privacion_Alcantarillado_7.setVisible(false);lyr_Privacion_Acueducto_8.setVisible(false);lyr_Privacion_Cocina_9.setVisible(false);lyr_Privacion_HacinamientoMitigable_10.setVisible(false);lyr_Privacion_Pisos_11.setVisible(false);lyr_DeficitCualitativo_12.setVisible(false);lyr_Privacion_HacinamientoNoMitigable_13.setVisible(false);lyr_Privacion_Cohabitacion_14.setVisible(false);lyr_Privacion_Paredes_15.setVisible(false);lyr_Privacion_TipoVivienda_16.setVisible(false);lyr_DeficitCuantitativo_17.setVisible(false);lyr_IPM_Manzana_18.setVisible(true);lyr_IPM_Clase_19.setVisible(true);lyr_IPM_Municipio_20.setVisible(true);lyr_Municipios_21.setVisible(true);lyr_Departamento_22.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CoberturaAlcantarillado_1,lyr_CoberturaAcueducto_2,lyr_CoberturaEnergia_3,lyr_CoberturaInternet_4,lyr_Privacion_RecoleccionBasura_5,lyr_Privacion_Energia_6,lyr_Privacion_Alcantarillado_7,lyr_Privacion_Acueducto_8,lyr_Privacion_Cocina_9,lyr_Privacion_HacinamientoMitigable_10,lyr_Privacion_Pisos_11,lyr_DeficitCualitativo_12,lyr_Privacion_HacinamientoNoMitigable_13,lyr_Privacion_Cohabitacion_14,lyr_Privacion_Paredes_15,lyr_Privacion_TipoVivienda_16,lyr_DeficitCuantitativo_17,lyr_IPM_Manzana_18,lyr_IPM_Clase_19,lyr_IPM_Municipio_20,lyr_Municipios_21,lyr_Departamento_22];
lyr_CoberturaAlcantarillado_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CoberturaAcueducto_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CoberturaEnergia_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CoberturaInternet_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_RecoleccionBasura_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_Energia_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_Alcantarillado_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_Acueducto_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_Cocina_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_HacinamientoMitigable_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_Pisos_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DeficitCualitativo_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_HacinamientoNoMitigable_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_Cohabitacion_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_Paredes_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Privacion_TipoVivienda_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DeficitCuantitativo_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_CLASE': 'COD_CLASE', 'COD_CPOB': 'COD_CPOB', 'COD_SECC': 'COD_SECC', 'COD_DANE': 'COD_DANE', 'COD_AG': 'COD_AG', 'COD_RDTM': 'COD_RDTM', 'Divipola': 'Divipola', 'UA_CLASE': 'UA_CLASE', 'manzana': 'manzana', 'hogares': 'hogares', 'viviendas': 'viviendas', 'tipovivienda': 'tipovivienda', 'paredes': 'paredes', 'cohabitacion': 'cohabitacion', 'hacnamientonomit': 'hacnamientonomit', 'deficitcuantu': 'deficitcuantu', 'pisos': 'pisos', 'hacinamientomit': 'hacinamientomit', 'cocina': 'cocina', 'acueducto_': 'acueducto_', 'alcantarillado_': 'alcantarillado_', 'energia_': 'energia_', 'basura': 'basura', 'deficitcuali': 'deficitcuali', 'cobintenet': 'cobintenet', 'cobenergia': 'cobenergia', 'cobacueducto': 'cobacueducto', 'cobalcantarillado': 'cobalcantarillado', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_IPM_Manzana_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cod_dane': 'cod_dane', 'ipm': 'ipm', 'COD_MUN': 'COD_MUN', 'COD_DEPTO': 'COD_DEPTO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_IPM_Clase_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'CLAS_CCDGO': 'CLAS_CCDGO', 'Shape_Leng': 'Shape_Leng', 'IPM': 'IPM', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_IPM_Municipio_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_CCNCT': 'MPIO_CCNCT', 'MPIO_NANO': 'MPIO_NANO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'ORIG_FID': 'ORIG_FID', 'IPM': 'IPM', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Municipios_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_CCNCT': 'MPIO_CCNCT', 'MPIO_NANO': 'MPIO_NANO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'ORIG_FID': 'ORIG_FID', 'IPM': 'IPM', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Departamento_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTO_CCDGO': 'DPTO_CCDGO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'DPTO_NANO_': 'DPTO_NANO_', 'DPTO_CACTO': 'DPTO_CACTO', 'DPTO_NANO': 'DPTO_NANO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CoberturaAlcantarillado_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CoberturaAcueducto_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CoberturaEnergia_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CoberturaInternet_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_RecoleccionBasura_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_Energia_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_Alcantarillado_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_Acueducto_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_Cocina_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_HacinamientoMitigable_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_Pisos_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DeficitCualitativo_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_HacinamientoNoMitigable_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_Cohabitacion_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_Paredes_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Privacion_TipoVivienda_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DeficitCuantitativo_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DPTO': 'TextEdit', 'COD_MPIO': 'TextEdit', 'COD_CLASE': 'TextEdit', 'COD_CPOB': 'TextEdit', 'COD_SECC': 'TextEdit', 'COD_DANE': 'TextEdit', 'COD_AG': 'TextEdit', 'COD_RDTM': 'TextEdit', 'Divipola': 'TextEdit', 'UA_CLASE': 'TextEdit', 'manzana': 'TextEdit', 'hogares': 'TextEdit', 'viviendas': 'TextEdit', 'tipovivienda': 'TextEdit', 'paredes': 'TextEdit', 'cohabitacion': 'TextEdit', 'hacnamientonomit': 'TextEdit', 'deficitcuantu': 'TextEdit', 'pisos': 'TextEdit', 'hacinamientomit': 'TextEdit', 'cocina': 'TextEdit', 'acueducto_': 'TextEdit', 'alcantarillado_': 'TextEdit', 'energia_': 'TextEdit', 'basura': 'TextEdit', 'deficitcuali': 'TextEdit', 'cobintenet': 'TextEdit', 'cobenergia': 'TextEdit', 'cobacueducto': 'TextEdit', 'cobalcantarillado': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IPM_Manzana_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'cod_dane': 'TextEdit', 'ipm': 'TextEdit', 'COD_MUN': 'TextEdit', 'COD_DEPTO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IPM_Clase_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'CLAS_CCDGO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'IPM': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IPM_Municipio_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_CCNCT': 'TextEdit', 'MPIO_NANO': 'Range', 'DPTO_CNMBR': 'TextEdit', 'ORIG_FID': 'Range', 'IPM': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Municipios_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_CCNCT': 'TextEdit', 'MPIO_NANO': 'Range', 'DPTO_CNMBR': 'TextEdit', 'ORIG_FID': 'Range', 'IPM': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Departamento_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'DPTO_NANO_': 'Range', 'DPTO_CACTO': 'TextEdit', 'DPTO_NANO': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CoberturaAlcantarillado_1.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_CoberturaAcueducto_2.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_CoberturaEnergia_3.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_CoberturaInternet_4.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_RecoleccionBasura_5.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_Energia_6.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_Alcantarillado_7.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_Acueducto_8.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_Cocina_9.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_HacinamientoMitigable_10.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_Pisos_11.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_DeficitCualitativo_12.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_HacinamientoNoMitigable_13.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_Cohabitacion_14.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_Paredes_15.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Privacion_TipoVivienda_16.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_DeficitCuantitativo_17.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DPTO': 'no label', 'COD_MPIO': 'no label', 'COD_CLASE': 'no label', 'COD_CPOB': 'no label', 'COD_SECC': 'no label', 'COD_DANE': 'no label', 'COD_AG': 'no label', 'COD_RDTM': 'no label', 'Divipola': 'no label', 'UA_CLASE': 'no label', 'manzana': 'no label', 'hogares': 'no label', 'viviendas': 'no label', 'tipovivienda': 'no label', 'paredes': 'no label', 'cohabitacion': 'no label', 'hacnamientonomit': 'no label', 'deficitcuantu': 'no label', 'pisos': 'no label', 'hacinamientomit': 'no label', 'cocina': 'no label', 'acueducto_': 'no label', 'alcantarillado_': 'no label', 'energia_': 'no label', 'basura': 'no label', 'deficitcuali': 'no label', 'cobintenet': 'no label', 'cobenergia': 'no label', 'cobacueducto': 'no label', 'cobalcantarillado': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_IPM_Manzana_18.set('fieldLabels', {'OBJECTID': 'no label', 'cod_dane': 'no label', 'ipm': 'no label', 'COD_MUN': 'no label', 'COD_DEPTO': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_IPM_Clase_19.set('fieldLabels', {'OBJECTID': 'no label', 'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'CLAS_CCDGO': 'no label', 'Shape_Leng': 'no label', 'IPM': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_IPM_Municipio_20.set('fieldLabels', {'OBJECTID': 'no label', 'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'no label', 'MPIO_CRSLC': 'no label', 'MPIO_NAREA': 'no label', 'MPIO_CCNCT': 'no label', 'MPIO_NANO': 'no label', 'DPTO_CNMBR': 'no label', 'ORIG_FID': 'no label', 'IPM': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Municipios_21.set('fieldLabels', {'OBJECTID': 'no label', 'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'no label', 'MPIO_CRSLC': 'no label', 'MPIO_NAREA': 'no label', 'MPIO_CCNCT': 'no label', 'MPIO_NANO': 'no label', 'DPTO_CNMBR': 'no label', 'ORIG_FID': 'no label', 'IPM': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Departamento_22.set('fieldLabels', {'OBJECTID': 'no label', 'DPTO_CCDGO': 'no label', 'DPTO_CNMBR': 'no label', 'DPTO_NANO_': 'no label', 'DPTO_CACTO': 'no label', 'DPTO_NANO': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Departamento_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});