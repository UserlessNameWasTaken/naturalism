import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { authors } from "./data/authors.ts";

export default [
  layout("./App.jsx", [
    index("./pages/Home.jsx"),
    route("about", "./pages/About.jsx"),
    route("authors", "./pages/Authors.jsx"),
    route("start", "./pages/Start.jsx"),
    // Author Routes
    ...authors.map(author => route("authors/:id", "./pages/AuthorPage.jsx", { id: author.id }))
  ]),
] satisfies RouteConfig;
