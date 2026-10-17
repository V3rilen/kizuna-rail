import { getRouteById, getSchedulesByRoute } from "../../models/model.js";

export default async (req, res) => {
  const { routeId } = req.params;
  const details = await getRouteById(routeId);
  details.schedules = await getSchedulesByRoute(routeId);

  // TODO: getCompleteRouteDetails instead
  const getMonthAbbreviation = (index) => {
    // Create a pseudo-date using the month index
    const date = new Date(2000, index, 1);

    return date.toLocaleString("en-US", { month: "short" });
  };
  res.render("routes/details", {
    title: "Route Details",
    details,
    getMonthAbbreviation,
  });
};
