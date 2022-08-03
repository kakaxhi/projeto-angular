import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class BooksService{

    private url = 'https://localhost:424382/api/bookstore';
    
    httpOptions= {
        Headers: new HttpHeaders({'content-type': 'application/json'})

    }

    constructor(private http: HttpClient){}

    getBook(){

        return this.http.get(this.url)
    }
}