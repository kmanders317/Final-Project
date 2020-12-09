var map2 = L.map('anotherMap').setView([37.8, -96], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/light-v9',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map2);


// control that shows state info on hover
var info2 = L.control();

info2.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

info2.update = function (props) {
  this._div.innerHTML = '<h4>Spanish Influenza US Deaths per State</h4>' + (props ?
    '<b>' + props.name + '</b><br />' + props.density + ' deaths per 100,000 people'
    : 'Hover over a state');
};

info2.addTo(map2);


// get color depending on population density value
function getColor2(d) {
  return d > 450 ? '#46003C' :
    d > 400 ? '#500032' :
    d > 350 ? '#5A0028' :
    d > 300 ? '#800026' :
    d > 250 ? '#BD0026' :
    d > 200 ? '#E31A1C' :
    d > 150 ? '#FC4E2A' :
    d > 100 ? '#FD8D3C' :
    d > 50 ? '#FEB24C' :
    d > 0 ? '#FED976' :
                      '#808080';
}

function style(feature) {
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: getColor2(feature.properties.density)
  };
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }

  info2.update(layer.feature.properties);
}

var geojson2;

function resetHighlight(e) {
  geojson2.resetStyle(e.target);
  info2.update();
}

function zoomToFeature(e) {
  map2.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  });
}

geojson2 = L.geoJson(spanishStatesData, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map2);

/*map2.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');*/


var legend2 = L.control({ position: 'bottomright' });

legend2.onAdd = function (map) {

  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450],
    labels = [],
    from, to;

  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      '<i style="background:' + getColor2(from + 1) + '"></i> ' +
      from + (to ? '&ndash;' + to : '+'));
  }

  div.innerHTML = labels.join('<br>');
  return div;
};

legend2.addTo(map2);

// var anotherMap = L.map('anotherMap').setView([37.8, -96], 4);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//   maxZoom: 18,
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//     'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   id: 'mapbox/light-v9',
//   tileSize: 512,
//   zoomOffset: -1
// }).addTo(anotherMap);

// var geojson = L.geoJson(statesData).addTo(anotherMap)

// var thirdMap = L.map('thirdMap').setView([37.8, -96], 4);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//   maxZoom: 18,
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//     'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   id: 'mapbox/light-v9',
//   tileSize: 512,
//   zoomOffset: -1
// }).addTo(thirdMap);

// var geojson = L.geoJson(statesData).addTo(thirdMap)