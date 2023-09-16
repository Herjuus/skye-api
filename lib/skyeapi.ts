import { Log } from "./functions";
import Express from "express";

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
                Log(`${this.name} running on port ${this.port}...`, false);
            });
        } catch {
            Log(`Failed to start server. Is port ${this.port} in use?`, true)
        }
    }

    get(path: string, response: any){
        this.app.get(path, (req: any, res: any) => {
            res.send(response);
        });
    }
}