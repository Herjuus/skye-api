import { Log } from "./functions";

export default class skyeserver {
    public port: number;
    public name: string;
    
    constructor(){
        this.port = 3000;
        this.name = "skye";
    }

    start(){
        try {
            Bun.serve({
                port: this.port,
                fetch(req) {
                    const url = new URL(req.url);
                    return new Response("");
                },
            });
            Log(`${this.name} running on port ${this.port}`, false);
        } catch {
            Log(`Failed to start server. Is port ${this.port} in use?`, true)
        }
    }
}