import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  public employee:any = [];
  constructor( private _employeeDetails:EmployeeServiceService){
  }

  ngOnInit(){
    this.employee = this._employeeDetails.getEmployees();
  }

}
