let imthemap = L.map('imthemap').setView([48.86, 2.35], 6)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(renameThis)
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  let Eiffel = L.marker([48.86, 2.29]).addTo(imthemap)
    let Eiffel Triangle = L.polygon([
      [48.860085, 2.295233],
      [48.859080, 2.296745],
      [48.856856, 2.293468]
    ]).addTo(imthemap);
    renameThis.bindPopup('Eiffel Triangle')
    renameThis.bindPopup('Eiffel')
