let myMap = L.map('renameThis').setView([32.18, -99.14], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(renameThis)
//L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
//  layers: 'nexrad-n0r-900913',
//  format: 'image/png',
//  transparent: true,
//  attribution: 'NOAA, Iowa State University'
//}).addTo(myMap)
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer'
}).addTo(myMap)
