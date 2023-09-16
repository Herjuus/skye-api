export class Log {
    error(message: string){
        console.error(`error: ${message}`);
    }
    log(message: string){
        console.log(message);
    }
}