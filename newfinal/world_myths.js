wendigowendigorougaroucerberuslet monsterMap = L.map('monsterMap').setView([31.160126, -6.372255], 2)

let thisBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
let thisBasemap = L.tileLayer(thisBasemapUrl)
thisBasemap.addTo(monsterMap)

let thisBasemap2Url = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
let thisBasemap2 = L.tileLayer(thisBasemap2Url)

let thisBasemap3Url = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let thisBasemap3 = L.tileLayer(thisBasemap3Url)

let thisBasemap4Url = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
let thisBasemap4 = L.tileLayer(thisBasemap4Url)

let theseBasemaps = {
  'Basic Map': thisBasemap,
  'Topo Map': thisBasemap2,
  'World Imagery Map': thisBasemap3,
  'Equator Map': thisBasemap4
}

let chupIcon = L.icon({
  iconUrl: 'chup.png',
  iconSize: [40, 40], // size of the icon
  iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
})

let dragonIcon = L.icon({
  iconUrl: 'dragon.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let cerberusIcon = L.icon({
  iconUrl: 'cerberus.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let krakenIcon = L.icon({
  iconUrl: 'chup.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let KrampusIcon = L.icon({
  iconUrl: 'krampus.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let nessieIcon = L.icon({
  iconUrl: 'nessie.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the i50, 50on which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let rougarouIcon = L.icon({
  iconUrl: 'rougarou.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let wendigoIcon = L.icon({
  iconUrl: 'wendigo.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let chupmarker = L.marker([18.105201, -66.388001], {icon: chupIcon}).addTo(monsterMap)
chupmarker.bindPopup('The Chupacabra, Puerto Rico' + '<br>The first attack from the Chupacabra occured in 1995 in Puerto Rico when 8 sheep were found dead, their bodies drained of blood '+ '<br>It is said to be the size of a small bear with spines and sometimes described as dog like.')

let cerberusmarker = L.marker([39.074201, 21.824301], {icon: cerberusIcon}).addTo(monsterMap)
cerberusmarker.bindPopup('Cerberus, Greece' + '<br>From Greek mythology, Cerberus is a 3 headed dog said to guard the gates of the Underworld.')

let krakenmarker = L.marker([67.276301, -2.068901], {icon: krakenIcon}).addTo(monsterMap)
krakenmarker.bindPopup('The Kraken, Coast of Norway' + '<br>Believed to reside off the coast of Norway and Greenland, the Kraken is said to be a giant squid like creature capable of taking down large ships')

let Krampusmarker = L.marker([47.516201, 14.550101], {icon: KrampusIcon}).addTo(monsterMap)
Krampusmarker.bindPopup('Krampus, Austria' + '<br>Often described as a half human, half goat creature, Krampus would steal and consume misbehaved children during the Christmas holidays. That will teach kids to behave!')

let nessiemarker = L.marker([57.322901, 4.424401], {icon: nessieIcon}).addTo(monsterMap)
nessiemarker.bindPopup('Loch Ness Monster, Scotland' + '<br>The ever elusive Loch Ness monster is believed to inhabit Loch Ness in Scotland. Though many attempts have been made to find it, Nessie has yet to be discoverd.')

let dragonmarker = L.marker([39.913818, 116.363625], {icon: dragonIcon}).addTo(monsterMap)
dragonmarker.bindPopup('Dragon, China' + '<br>Though many cultures have dragon myths, the oldest are believed to have originated in China. The Chinese dragon may have actually just been dinosaur fossils.')

let rougaroumarker = L.marker([29.595801, 90.719501], {icon: rougarouIcon}).addTo(monsterMap)
rougaroumarker.bindPopup('Rougarou, Louisiana, USA' + '<br>The Rougarou lives in the swamps of Louisiana but can be visited at his day job at the Audubon Zoo where he works as an exhibit.')

let wendigomarker = L.marker([45.052201, 82.484601], {icon: wendigoIcon}).addTo(monsterMap)
wendigomarker.bindPopup('Wendigo, Great Lakes Region' + '<br>From Algonquian folklore, the Wendigo is a man-eating creature, though possibly human. The wendigo is a destuctive and violent creature.')


let thisControlOptions = {
  collapsed: true
}

let operationalLayers = {
  'Chupacabra': chupmarker,
  'Nessie': nessiemarker,
  'Cerberus': cerberusmarker,
  'Kraken': krakenmarker,
  'Krampus': Krampusmarker,
  'Dragon': dragonmarker,
  'Rougarou': rougaroumarker,
  'Wendigo': wendigomarker
}

let chupCoords = [
  [29.980529, 31.126762],
  [29.980529, 31.138864],
  [29.971272, 31.138864],
  [29.971272, 31.126762]
]

let chupstyle = {
  color: 'Indigo',
  fillColor: 'Indigo',
  fillOpacity: 0.3
}

let chupshape = L.polygon(chupCoords, chupstyle).addTo(monsterMap)
chupshape.bindPopup('The Chupacabra')

let nessieCoords = [
  [40.427289, 116.604163],
  [40.439079, 116.592964],
  [40.441561, 116.587468],
  [40.43934, 116.580255],
  [40.437733, 116.577925],
  [40.436785, 116.578569],
  [40.435315, 116.575435],
  [40.430056, 116.571141],
  [40.429044, 116.568522],
  [40.429632, 116.565989],
  [40.436785, 116.561996],
  [40.448528, 116.553765],
  [40.451925, 116.543808],
  [40.454537, 116.545268],
  [40.454864, 116.543121],
  [40.452708, 116.541404],
  [40.456431, 116.528335],
  [40.45294, 116.518792],
  [40.453507, 116.515294],
  [40.456762, 116.509119],
  [40.453993, 116.500237],
  [40.463745, 116.495685]
]

let nessiestyle = {
  color: 'Indigo'
}

let nessieshape = L.polyline(nessieCoords, nessiestyle).addTo(monsterMap)
nessieshape.bindPopup('Nessie')

let Krampusshape = L.circle([41.890251, 12.492373], {
    color: 'deeppink',
    fillColor: '#FF1493',
    fillOpacity: 0.3,
    radius: 250
}).addTo(monsterMap);
Krampusshape.bindPopup('Krampus')

let dragonCoords = [
  [30.350522, 35.425586],
  [30.309035, 35.425586],
  [30.309035, 35.458217],
  [30.350522, 35.458217]
]

let dragonstyle = {
  color: 'Indigo',
  fillColor: 'Indigo',
  fillOpacity: 0.3
}

let dragonshape = L.polygon(dragonCoords, dragonstyle).addTo(monsterMap)
dragonshape.bindPopup('dragon')

let wendigoshape = L.circle([20.683001, -88.568595], {
    color: 'deeppink',
    fillColor: '#FF1493',
    fillOpacity: 0.3,
    radius: 250
}).addTo(monsterMap);
wendigoshape.bindPopup('Wendigo')

let cerberusCoords = [
  [27.175474, 78.040656],
  [27.175474, 78.043704],
  [27.170415, 78.043704],
  [27.170415, 78.040656]
]

let cerberusstyle = {
  color: 'cyan',
  fillColor: '#00FFFF',
  fillOpacity: 0.3
}
let cerberusshape = L.polygon(cerberusCoords, cerberusstyle).addTo(monsterMap)
cerberusshape.bindPopup('Cerberus')

let krakenCoords = [
  [-13.161894, -72.546448],
  [-13.161643, -72.545718],
  [-13.162167, -72.544929],
  [-13.16245, -72.544478],
  [-13.162585, -72.544017],
  [-13.162951, -72.543748],
  [-13.163714, -72.544092],
  [-13.165138, -72.542972],
  [-13.167192, -72.543298],
  [-13.166231, -72.545971],
  [-13.16527, -72.545455],
  [-13.164208, -72.546142]
]

let krakenstyle = {
  color: 'cyan',
  fillColor: '#00FFFF',
  fillOpacity: 0.3
}
let krakenshape = L.polygon(krakenCoords, krakenstyle).addTo(monsterMap)
krakenshape.bindPopup('Kraken')

let rougaroushape = L.circle([-22.951871, -43.21118], {
    color: 'lime',
    fillColor: '#00FF00',
    fillOpacity: 0.3,
    radius: 150
}).addTo(monsterMap);
rougaroushape.bindPopup('Rougarou')

monsterMap.on('click', function (event) {
  console.log('You selected ' + event.latlng)
})


L.control.layers(theseBasemaps, operationalLayers, thisControlOptions).addTo(monsterMap)
