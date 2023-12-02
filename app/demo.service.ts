import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService  {
public URL="http://localhost:5100/dprtId"
public data:any;
  constructor(private Obj:HttpClient)
  {
    
  }
  
GetDetails(dprtid:any):Observable<any>
{
  this.data={
    id:dprtid
  }
  return this.Obj.post<any>(this.URL,this.data)

}
}
