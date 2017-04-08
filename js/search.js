let search = function(e) {
  let regions = createRegionsList(),
    filteredRegion = regions.filter(function(reg){

    return reg.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
  });

  // console.log(filteredRegion);
  showFilteredRegion(filteredRegion)

  // createList(filteredRegion);
  // createList(filteredRegion, selectedRegions);
};