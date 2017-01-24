import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class TelnetService {
    loading: boolean;
    constructor(private http: Http){}

    getData(){
        this.loading = true;
        return this.http.get('http://localhost:3000/telnet')
            .map((response: Response)=> {
                const messages = response.json().obj;
                console.log(messages);
                this.loading = false;
                return messages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

}
