import { Log } from "./log";
import Express from "express";
import bodyParser from "body-parser";
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from 'swagger-ui-express';

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

    constructor(){
        this.port = 8000;
        this.name = "SkyeAPI";
        this.app = Express();
        this.jsonParser = bodyParser.json();
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

    async docs(path: string){
        this.app.use(path, swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    }

    get(path: string, response: Function){
        this.app.get(path, this.jsonParser, (req: any, res: any) => {
            res.send(response(req.query));
            log.log(`GET request recieved at ${path} from ${req.ip}`)
        });
    }

    post(path: string, response: Function){
        this.app.post(path, this.jsonParser, async(req: any, res: any) => {
            let body = await req.body;
            console.log(body)
            await res.send(response(body))
            log.log(`POST request recieved at ${path} from ${req.ip}`)
        })
    }
}