const selectedRegions = [];

let createMarker = function(e) {

  if (e.target.tagName !== 'LABEL') return;

  const  name = e.target.innerText;

  console.log(e.target.closest('.list__second').classList.contains('add'));

  if (!e.target.firstChild.checked){
    selectedRegions.push(name);
  } else {

    const index = selectedRegions.indexOf(name);

    console.log(index);
    if (index !== -1) {
      selectedRegions.splice(index,1)
    } else if (selectedRegions.length == 1){
      selectedRegions.splice(0,1);
    }
  }

  console.log(selectedRegions);

  showSelectedRegions(selectedRegions);
};