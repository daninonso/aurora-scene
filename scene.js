const arcgisScene = document.querySelector("arcgis-scene")
arcgisScene.addEventListener("arcgisViewReadyChange", () => {
  const view = arcgisScene.view
  view.camera = {
    position: [-104.81999871, 39.70848386, 1805.86084],
    heading: 77.4,
    tilt: 77.25,
  }
  view.environment.lighting = {
    type: "sun",
    date: new Date("January 1, 2022 22:00:00 UTC"),
  }
  view.environment.lighting.directShadowsEnabled = true
})

require(["esri/config", "esri/views/SceneView"], function (
  esriConfig,
  SceneView,
) {
  esriConfig.apiKey =
    "AAPTxy8BH1VEsoebNVZXo8HurEIMUQ9XPnUgiY3doZpMGka7gDFURgXsOg7PpiPdqXiuPuaflsfKNobTHlScDkS7IyhTmKCbES3QLZ73UoTd_tOiOhKdgh0ANcQX5SEQ3wYO7EdZuFFBCX4dm7PjoQDpBHQimf3MTD2CjHqeSg71jjkRV-d9e3n6e74anjn_guoXfD42Xx9Nvw8Eh_QxC-pHjjCz_w5DgPuYRlyakdnhRIrlK4bXLlUTwh02RpFcnMpyAT1_zdoGwbrp"
})
