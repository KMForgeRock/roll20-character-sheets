on('change:oracle_ironsworn_button', function(eventinfo) {
  setAttrs({
    oracle_ironsworn: eventinfo.newValue,
  });
});

on('change:oracle_page_button', function(eventinfo) {
  setAttrs({
    oracle_page: eventinfo.newValue,
  });
});