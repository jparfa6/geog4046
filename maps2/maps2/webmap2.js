let webmap2 = L.map('webmap2').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(renameThis)
//L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
//  layers: 'nexrad-n0r-900913',
//  format: 'image/png',
//  transparent: true,
//  attribution: 'NOAA, Iowa State University'
//}).addTo(webmap2)
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer'
}).addTo(webmap2)
