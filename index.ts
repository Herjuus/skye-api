import SkyeAPI from "./lib/skyeapi";
import { getData } from "./functions";

type QueryType = {
    message: string,
}

const server = new SkyeAPI;
server.name = "SkyeAPI";
server.port = 8000;

server.get("/data", getData);

server.get("/data2", function (query: QueryType) {
    return {
        data: "data",
        query: query.message,
    }
});

server.post("/", function (body: any){
    return body
});

server.start();