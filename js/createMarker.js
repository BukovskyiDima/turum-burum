const selectedRegions = [];

let createMarker = function(e) {

  if (e.target.tagName !== 'LABEL') return;

  const ul = document.querySelector('.overview ul'),
    name = e.target.innerText,
    regions = createRegionsList();

  if (!e.target.marker) {
    const item = document.createElement('li');
    item.innerHTML = '<span>' + name + '</span><span class="cross"></span>';
    e.target.marker = item;
    ul.appendChild(item);
    selectedRegions.push(name);
  } else {
    e.target.marker.remove();
    delete e.target.marker;

    const index = regions.indexOf(name);
    console.log(index);
    if (index !== -1) {
      selectedRegions.splice(index,1)
    } else if (selectedRegions.length == 1){
      selectedRegions.splice(0,1);
    }
  }
  // console.log(selectedRegions);
};