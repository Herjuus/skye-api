export function Log(message: string, error: boolean){
    if (!error) {
        console.log(message);
    } else {
        console.error(`error: ${message}`);
    }
}