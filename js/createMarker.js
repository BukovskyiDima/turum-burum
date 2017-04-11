regionUtils.createMarker = (e) => {

  if (e.target.tagName !== 'LABEL') return;

  const  name = e.target.innerText;

  if (!e.target.firstChild.checked){
    regionUtils.selectedRegions.push(name);
  } else {

    const index = regionUtils.selectedRegions.indexOf(name);

    console.log(index);
    if (index !== -1) {
      regionUtils.selectedRegions.splice(index,1)
    } else if (regionUtils.selectedRegions.length === 1){
      regionUtils.selectedRegions.splice(0,1);
    }
  }

  regionUtils.showSelectedRegions(regionUtils.selectedRegions);
};