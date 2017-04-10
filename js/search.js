regionUtils.search = (e) => {
  let regions = regionUtils.createRegionsList(),
    filteredRegion = regions.filter(function(reg){

    return reg.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
  });

  regionUtils.showFilteredRegion(filteredRegion);
};