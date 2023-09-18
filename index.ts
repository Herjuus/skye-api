import SkyeAPI from "./lib/skyeapi";

const server = new SkyeAPI;

server.get("/", function (query: any) {
    return query.message
});

server.docs("/docs");
server.start();