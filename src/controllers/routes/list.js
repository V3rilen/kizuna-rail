import {
  getAllRoutes,
  getListOfRegions,
  getListOfSeasons,
  getRoutesBySeasonAndRegion,
} from "../../models/model.js";

export default async (req, res) => {
  const params = req.query;
  let routes;
  let regions = await getListOfRegions();
  const seasons = await getListOfSeasons();

  routes = await getRoutesBySeasonAndRegion(
    params.season && seasons.includes(params.season) ? params.season : null,
    params.region && regions.includes(params.region) ? params.region : null,
  );

  res.render("routes/list", {
    title: "Scenic Train Routes",
    regions,
    routes,
    seasons,
  });
};
