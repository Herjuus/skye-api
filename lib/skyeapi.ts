import { Log } from "./log";
import Express from "express";
import bodyParser from "body-parser";
import { resolve } from "path";
import { setupReactViews } from "express-tsx-views";

const log = new Log()

export default class SkyeAPI {
    public port: number;
    public name: string;

    private app: any;
    private jsonParser: any;
    private reactviews: void;

    constructor(){
        this.port = 8000;
        this.name = "SkyeAPI";
        this.app = Express();
        this.jsonParser = bodyParser.json();
        this.reactviews = setupReactViews(this.app, {
            viewsDirectory: resolve(__dirname, "..", "pages"),
            prettify: true,
        });
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

    // docs(path: string){

    // }

    get(path: string, response: Function){
        this.app.get(path, this.jsonParser, (req: any, res: any) => {
            res.send(response(req.query));
            log.log(`GET request recieved at ${path} from ${req.ip}`)
        });
    }

    post(path: string, response: Function){
        this.app.post(path, this.jsonParser, async(req: any, res: any) => {
            let body = await req.body;
            // console.log(body)
            await res.send(response(body))
            log.log(`POST request recieved at ${path} from ${req.ip}`)
        });
    }

    react_page(path: string, page: string, props?: any){
        this.app.get(path, (req: any, res: any) => {
            res.render(page, props);
            log.log(`React request recieved at ${path} from ${req.ip}`)
        });
    }
}