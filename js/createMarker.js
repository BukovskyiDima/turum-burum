const selectedRegions = [];

regionUtils.createMarker = (e) => {

  if (e.target.tagName !== 'LABEL') return;

  const  name = e.target.innerText;

  if (!e.target.firstChild.checked){
    selectedRegions.push(name);
  } else {

    const index = selectedRegions.indexOf(name);

    console.log(index);
    if (index !== -1) {
      selectedRegions.splice(index,1)
    } else if (selectedRegions.length === 1){
      selectedRegions.splice(0,1);
    }
  }

  regionUtils.showSelectedRegions(selectedRegions);
};