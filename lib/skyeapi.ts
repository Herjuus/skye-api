import { Log } from "./log";
import Express from "express";

const log = new Log()

export default class SkyeAPI {
    public port: number;
    public name: string;

    private app: any;

    constructor(){
        this.port = 3000;
        this.name = "skye";
        this.app = Express();
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

    get(path: string, response: any){
        this.app.get(path, (req: any, res: any) => {
            res.send(response);
            log.log(`Get request recieved at ${path} with response ${response}`)
        });
    }
}