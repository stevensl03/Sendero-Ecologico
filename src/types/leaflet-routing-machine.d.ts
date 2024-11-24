declare module "leaflet-routing-machine" {
  import * as L from "leaflet";
  export = L.Routing;
}

declare namespace L {
  namespace Routing {
    function control(options: any): any;
  }
}
