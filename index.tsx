import SkyeAPI from "./lib/skyeapi";

const server = new SkyeAPI;

server.get("/", function (query: any, params: any, res: any){
    return "Hello World"
});

server.start();
