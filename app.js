const sorov = new XMLHttpRequest();
sorov.open("GET", "https://ip-api.com/json?domain=kun.uz");
sorov.send();
// console.log(sorov);

sorov.addEventListener("load", () => {
  console.log(sorov.response);
});

console.log(ymaps);
ymaps.ready(renderMap);

function renderMap() {
  const myMap = new ymaps.Map("map", {
    center: [40.5512343351364, 71.88508325109426],
    zoom: 14,
  });
}
