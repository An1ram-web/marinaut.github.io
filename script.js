
(function () { "use strict"; }

//clock

document.addEventListener("DOMContentLoaded", function () {
  let c = document.getElementById("clock");

  //setTimeout(updateClock, 2000);
  setInterval(updateClock, 1000);

  function updateClock() {
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();

    var diem = "AM";

    if (h == 0) {
      h = 12;
    } else if (h > 12) {
      h = h - 12;
      diem = "PM";
    }

    if (h < 10) {
      h = "0" + h;
    }

    if (m < 10) {
      m = "0" + m;
    }

    if (s < 10) {
      s = "0" + s;
    }

    c.innerHTML = h + ":" + m + ":" + s;
  }
});


// forms

document.getElementById("form").addEventListener("submit", estimateDelivery);



let e = document.getElementById("delivery");
e.innerHTML = value;

function estimateDelivery(event) {
  event.preventDefault();

  let linn = document.getElementById("linn");
  let vehicle1 = document.getElementById("vehicle1");
  let vehicle2 = document.getElementById("vehicle2");
}

  if fname.value === "") {
    alert("Palun sisestage eesnimi");
  (linn.value === "") 
    alert("Palun valige linn nimekirjast");

    linn.focus();

    return;
  } else {
    e.innerHTML = document.body.innerHTML(value + "eurot;");
  }

  console.log("Tarne hind on arvutatud");




// map

let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";
let mapAPIKey2 = "AIzaSyC6VRbNmCDbSrYwtp6ecp9kSteHu1nUWzg";
let map;

function GetMap() {
"use strict";

let centerPoint = new Microsoft.Maps.Location(58.38104, 26.71992);

map = new Microsoft.Maps.Map("#map", {
  credentials: mapAPIKey,
  center: centerPoint,
  zoom: 14,
  mapTypeId: Microsoft.Maps.MapTypeId.road,
  disablePanning: true,
});

let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
  title: "Tartu Ülikool",
  //subTitle: 'Hea koht',
  //text: 'UT'
});

map.entities.push(pushpin);
}

  

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE
