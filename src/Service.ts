import axios from "axios";



export async function convertApi(from: string, to: string, amount:string){
    return (await axios.get<string>("http://localhost:8080/api/convert?from=" + from + "&to=" + to + "&amount=" + amount));
}
