import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./App.jsx", [
    index("./pages/Home.jsx"),
    route("about", "./pages/About.jsx"),
    route("authors", "./pages/Authors.jsx"),
  ]),
] satisfies RouteConfig;
