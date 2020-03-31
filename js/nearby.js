document.addEventListener('DOMContentLoaded', function () {
  d3.json('/js/village_location.json').then(function (data) {
    window.latlon = []
    data.features.forEach(function (f) {
      latlon.push({
        lat: f.geometry.coordinates[1],
        lon: f.geometry.coordinates[0],
        name: f.properties['SUB_DIST'] + ': ' + f.properties['NAME']
      })
    })
  })
})

// From https://stackoverflow.com/a/51819649/366138
function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = Math.PI * lat1/180
  var radlat2 = Math.PI * lat2/180
  var theta = lon1-lon2
  var radtheta = Math.PI * theta/180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist)
  dist = dist * 180/Math.PI
  dist = dist * 60 * 1.1515
  if (unit=="K") { dist = dist * 1.609344 }
  if (unit=="N") { dist = dist * 0.8684 }
  return dist
}

function allDistances(lat,lon) {
  var closest = [];
  window.latlon.forEach(function (v) {
    closest.push({
      distance: distance(lat,lon,v.lat,v.lon,'K'),
      name: v.name
    })
  })
  closest.sort(function (a,b) {
    return a.distance - b.distance;
  })
  closest = closest.slice(0, 20)
  window.nearbyAreas = closest.map(function (a) {
    return a.name;
  })
}
