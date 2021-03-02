
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: 'pk.eyJ1IjoicGVubG93OTkiLCJhIjoiY2tsZDgzOXNpMDF6YTJ1cXBiaXZ6cDl3bCJ9.BJssP1C-Mp7LCPqEQhmOow'
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoicGVubG93OTkiLCJhIjoiY2tsZDgzOXNpMDF6YTJ1cXBiaXZ6cDl3bCJ9.BJssP1C-Mp7LCPqEQhmOow'
    // checking
});

// Create a base layer that holds both maps.
let baseMaps = {
  "<span style='color: black'>Dark</span>": dark,
  "<span style='color: black'>Street</span>": streets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [38.93, -98.85],
  zoom: 4,
  layers: [dark]
})

// Create a style for the lines.
let yesIt = {
  color: "black",
  weight: 1,
  fillColor: "blue"
}
let noIt = {
  color: "black",
  weight: 1,
  fillColor: "red"
}

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Load up the MSA geojson data
let MSAjson = "https://raw.githubusercontent.com/penlow99/Mapping_MSA/main/MSA_geo.geojson"

// Grabbing our GeoJSON data.
d3.json(MSAjson).then(function(data) {
// Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    filter: function(feature) {
      if (feature.properties.lsad === "M1") return true
    },
    style: function(feature) {
      if (emergent_array.includes(Number(feature.properties.cbsafp))) {
        return yesIt;
      } else {
        return noIt;
      }
    },
    onEachFeature: function(feature, layer) {
      let cbsa = feature.properties.cbsafp;
      layer.bindPopup(build_html(cbsa));
    }
  }).addTo(map);
});

//---------------------------------------------------------------------------------------
function build_html(cbsa) {
  try {
    var html = `
    <h5>`  + data_dict['MSA'][cbsa] + `</h5>
    <table>
      <tr>
          <td>CBSA : </td>
          <td>` + cbsa + `</td>
      </tr>
      <tr>
          <td>Population ROC : </td>
          <td>` + data_dict['2024_Pop_ROC'][cbsa].toFixed(2) + `</td>
      </tr>
      <tr>
          <td>Unemployment ROC : </td>
          <td>` + data_dict['2024_Unem_ROC'][cbsa].toFixed(2) + `</td>
      </tr>
      <tr>
          <td>Employment ROC : </td>
          <td>` + data_dict['2024_Emp_ROC'][cbsa].toFixed(2) + `</td>
      </tr>
      <tr>
          <td>GDP ROC : </td>
          <td>` + data_dict['2024_GDP_ROC'][cbsa].toFixed(2) + `</td>
      </tr>
      <tr>
          <td>Total Score : </td>
          <td>` + data_dict['Total_Score'][cbsa] + `</td>
      </tr>
    </table>
    `
  }
  catch (err) {
    console.log('Problem child is: ' + cbsa + ' -- ' + data_dict['MSA'][cbsa])
  }
  return html
}
//---------------------------------------------------------------------------------------
