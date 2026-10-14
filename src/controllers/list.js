import {
  getAllRoutes,
  getListOfRegions,
  getListOfSeasons,
  getRoutesBySeasonAndRegion,
} from "../models/model.js";

export default async (req, res) => {
  const params = req.query;
  let routes;
  let regions = await getListOfRegions();
  const seasons = await getListOfSeasons();
  if (
    (params.season && seasons.includes(params.season)) ||
    (params.region && regions.includes(params.region))
  ) {
    routes = await getRoutesBySeasonAndRegion(params.season, params.region);
  } else {
    routes = await getAllRoutes();
  }

  res.render("routes/list", {
    title: "Scenic Train Routes",
    regions,
    routes,
    seasons,
  });
};
