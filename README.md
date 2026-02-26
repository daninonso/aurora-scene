# Aurora 3D Scene
The Aurora scene was created in ArcGIS Pro using its 3D engine powered by ArcGIS Maps SDK I3S (Indexed 3D Scene Layers). With the ArcGIS SDK for JavaScript, custom components can be used to serve interactive 3D scenes on the web. 
The components and nested components used include:
* __arcgis-scene__: leverages its HTML tag format `<arcgis-scene></arcgis-scene>` to serve 3D scene using only the item-id
* __arcgis-zoom__: nested component that sets the position of the zoom widget
* __arcgis-navigation-toggle__: nested component that sets the position of the navigation widget
* __arcgis-legend__: nested component that sets the position of the legend on the scene

Using the scene component, in JavaScript I set the camera and lighting properties. These settings are flexible and allow for customization of the default view and environments.


![DF832DAC-6CDB-4769-BC4E-85745F5795B1_4_5005_c](https://github.com/user-attachments/assets/1379a3d0-4220-469d-847e-5dfbdab86ea6)
