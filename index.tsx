import SkyeAPI from "./lib/skyeapi.tsx";

const server = new SkyeAPI;

server.get("/", function (query: any, params: any){
    return "Hello World"
});

server.get("/fortnite", function (query: any, params: any){
    return query.message
});

server.start();
