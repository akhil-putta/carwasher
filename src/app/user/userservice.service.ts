import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( public http:HttpClient) { }

  baseurl="https://api.mlab.com/api/1/databases/akhil_dl/collections/users";
  apiKey="&apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  
log(x){
  return this.http.get(`${this.baseurl}?q=${JSON.stringify(x.value)}${this.apiKey}`);
}
}
