import { Log } from "./log";
import Express from "express";
import bodyParser from "body-parser";
import { setupReactViews } from "express-tsx-views";
import { resolve } from "path";

const log = new Log()

type endpoint = {
    type: string
    path: string
}

export default class SkyeAPI {
    public port: number;
    public name: string;

    private app: any;
    private jsonParser: any;

    endpoints: endpoint[];

    constructor(){
        this.port = 8000;
        this.name = "SkyeAPI";
        this.app = Express();
        this.jsonParser = bodyParser.json();
        this.endpoints = [];
    }

    start(){
        try {
            this.app.listen(this.port, () => {
                log.log(`${this.name} running on port ${this.port}...`);
            });
        } catch {
            log.error(`Failed to start server. Is port ${this.port} in use?`)
        }
    }

    async docs(){
        try {
            setupReactViews(this.app, {
                viewsDirectory: resolve(__dirname, "views"),
                prettify: true, // Prettify HTML output
            });
            const endpoints = this.endpoints;
            this.get(`/docs/data`, function () {
                return endpoints;
            });
            this.app.get("/docs", (req: any, res: any) => {
                res.render("docs", {endpoints: endpoints});
            })
        } catch {
            log.error(`Failed to run docs.`)
        }
    }

    get(path: string, response: Function){
        const object: endpoint = {
            type: "GET",
            path: path,
        }
        this.endpoints.push(object)
        this.app.get(path, this.jsonParser, (req: any, res: any) => {
            res.send(response(req.query));
            log.log(`GET request recieved at ${path} from ${req.ip}`)
        });
    }

    post(path: string, response: Function){
        const object: endpoint = {
            type: "POST",
            path: path,
        }
        this.endpoints.push(object)
        this.app.post(path, this.jsonParser, async(req: any, res: any) => {
            let body = await req.body;
            console.log(body)
            await res.send(response(body))
            log.log(`POST request recieved at ${path} from ${req.ip}`)
        })
    }
}