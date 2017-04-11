regionUtils.hideAll = () => {
  regionUtils.allSelectedRegion.splice(0, regionUtils.allSelectedRegion.length);

  regionUtils.showSelectedRegions(regionUtils.allSelectedRegion);
};