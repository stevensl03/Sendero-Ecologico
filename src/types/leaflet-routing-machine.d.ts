declare module "leaflet-routing-machine" {
  import * as L from "leaflet";
  export = L.Routing;
}

declare namespace L {
  namespace Routing {
    function control(options: any): any;
  }
}
declare namespace L {
  namespace Routing {
    class Control extends L.Control {
      constructor(options?: any);
      addTo(map: L.Map): this;
      setWaypoints(waypoints: L.LatLng[]): this;
    }
  }
}