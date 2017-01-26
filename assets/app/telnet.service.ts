import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {IP} from "./ip.model";
@Injectable()
export class TelnetService {
    loading: boolean;
    constructor(private http: Http){}

    getData(){
        this.loading = true;
        return this.http.get('https://telnet-app.herokuapp.com/telnet')
            .map((response: Response)=> {
                const messages = response.json().obj;
                console.log(messages);
                this.loading = false;
                return messages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
    setIp(ip: IP){
        const body = JSON.stringify(ip);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://telnet-app.herokuapp.com/telnet', body, {headers: headers})
            .map((response: Response) => {
            const result = response.json();
            })

    }
}
