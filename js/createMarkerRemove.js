const selectedRegionsRemove = createRegionsList();

let createMarkerRemove = function(e) {
  if (e.target.tagName !== 'LABEL') return;

  const  name = e.target.innerText;

  if (!e.target.firstChild.checked) {

    console.log(selectedRegionsRemove.indexOf(name));
    const index = selectedRegionsRemove.indexOf(name);

    if (index !== -1) {
      selectedRegionsRemove.splice(index, 1);
    } else if (selectedRegionsRemove.length == 1) {
      selectedRegionsRemove.splice(0, 1);
    }
  } else {
    selectedRegionsRemove.push(name);
  }

  showSelectedRegions(selectedRegionsRemove);
};