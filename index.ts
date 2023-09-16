import SkyeAPI from "./lib/skyeapi";

const server = new SkyeAPI;
server.name = "SkyeAPI";
server.port = 8000;

server.get("/", {
    yo: "ong"
})

server.start()