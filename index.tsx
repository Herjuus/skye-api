import SkyeAPI from "./lib/skyeapi";

const server = new SkyeAPI;

server.get("/", function () {
    return "Hello World"
});

server.start();