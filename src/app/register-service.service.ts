import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  data;

  constructor() { }

  setdata(str){
    this.data=str;
  }


getdata()
{
  return this.data;
}
}