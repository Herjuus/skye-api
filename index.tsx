import SkyeAPI from "./lib/skyeapi";

const server = new SkyeAPI;

server.get("/hello", function () {
    return "Hello World"
});

server.docs("/docs");
server.start();