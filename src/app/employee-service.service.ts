import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  getEmployees(){
    return [
      {"id":1, "name":"umair","department":"RPA"},
      {"id":2,"name":"sarmad","department":"Extractor"},
      {"id":3,"name":"Tahir","department":"Backend"}
    ]
  }

  constructor() { }
}
