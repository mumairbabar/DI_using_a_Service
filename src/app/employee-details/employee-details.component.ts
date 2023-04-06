import { Component, OnInit} from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  public employee:any = [];
  constructor( private _employeeDetails:EmployeeServiceService){

  }

  ngOnInit(){
    this.employee = this._employeeDetails.getEmployees();
  }

}
