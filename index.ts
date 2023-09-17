import SkyeAPI from "./lib/skyeapi";

const server = new SkyeAPI;

server.get("/", function() {
    return "SkyeAPI"
});

server.start();