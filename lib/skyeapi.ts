import { Log } from "./log";
import Express from "express";
import bodyParser from "body-parser";
import { resolve } from "path";
import fs from "fs";
import { renderToString } from "react-dom/server";

const log = new Log()

export default class SkyeAPI {
    public port: number;
    public name: string;

    private app: any;
    private jsonParser: any;

    constructor(){
        this.port = 8000;
        this.name = "SkyeAPI";
        this.app = Express();
        this.jsonParser = bodyParser.json();
    }

    start(){
        try {
            this.app.use(Express.static(resolve(__dirname, "..", "public")));
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

    react_page(path: string, page: any){
        this.app.get(path, (req: any, res: any) => {
            // res.render(page, props);
            fs.readFile(resolve(__dirname, "..", "public/index.html"), "utf8", (err, data) => {
                if (err) {
                    return res.status(500).send("An error occurred");
                }
                return res.send(
                    data.replace(
                        '<div id="root"></div>',
                        `<div id="root">${renderToString(page)}</div>`
                    )
                );
            });
        });
    }
}
// log.log(`React page request recieved at ${path} from ${req.ip}`)