regionUtils.hideAll = () => {
  allSelectedRegion.splice(0, allSelectedRegion.length);

  regionUtils.showSelectedRegions(allSelectedRegion);
};