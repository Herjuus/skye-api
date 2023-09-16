import SkyeAPI from "./lib/skyeapi";
import { getData } from "./functions";

const server = new SkyeAPI;
server.name = "SkyeAPI";
server.port = 8000;

server.get("/", {
    image: "blablabla",
    id: 12,
})

server.get("/data", getData())

server.start()