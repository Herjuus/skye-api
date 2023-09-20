import SkyeAPI from "./lib/skyeapi";

const server = new SkyeAPI;

server.get("/", function (query: any) {
    return query.message
});

server.react_page("/docs", "docs", { message: "yo" })

server.start();