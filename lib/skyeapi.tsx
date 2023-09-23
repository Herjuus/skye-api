import { Log } from "./log";
import Express from "express";
import bodyParser from "body-parser";
import { resolve } from "path";
import fs from "fs";
import { renderToString } from "react-dom/server";
import React from "react";
import Docs from "../src/pages/docs";

const log = new Log()

type endpoint = {
    path: string;
}

export default class SkyeAPI {
    public port: number;
    public name: string;

    private app: any;
    private jsonParser: any;

    private getendpoints: Array<endpoint>;
    private postendpoints: Array<endpoint>;
    private reactendpoints: Array<endpoint>;

    constructor(){
        this.port = 8000;
        this.name = "SkyeAPI";
        this.app = Express();
        this.jsonParser = bodyParser.json();
        this.getendpoints = [];
        this.postendpoints = [];
        this.reactendpoints = [];
    }

    start(){
        try {
            this.app.use(Express.static(resolve(__dirname, "..", "src")));
            this.app.listen(this.port, () => {
                log.log(`${this.name} running on port ${this.port}...`);
            });
        } catch {
            log.error(`Failed to start server. Is port ${this.port} in use?`)
        }
    }

    docs(path?: string){
        let setpath = "/docs"
        if (path) {
            setpath = path
        }
        this.react_page(setpath, <Docs title={this.name} getendpoints={this.getendpoints} postendpoints={this.postendpoints} reactendpoints={this.reactendpoints}/>);
    }

    get(path: string, response: Function){
        this.getendpoints.push({ path: path})
        this.app.get(path, this.jsonParser, (req: any, res: any) => {
            res.send(response(req.query, req.params, res));
            log.log(`GET request received at ${path} from ${req.ip}`)
        });
    }

    redirect(targeturl: string, res: any){
        res.status(301).redirect(targeturl)
    }

    post(path: string, response: Function){
        this.postendpoints.push({ path: path})
        this.app.post(path, this.jsonParser, async(req: any, res: any) => {
            let body = await req.body;
            await res.send(response(body, res))
            log.log(`POST request received at ${path} from ${req.ip}`)
        });
    }

    react_page(path: string, page: any){
        this.reactendpoints.push({ path: path})
        this.app.get(path, (req: any, res: any) => {
            log.log(`React page request received at ${path} from ${req.ip}`)
            fs.readFile(resolve(__dirname, "..", "src/index.html"), "utf8", (err, data) => {
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
