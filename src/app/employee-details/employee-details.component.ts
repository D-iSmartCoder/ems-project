import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { tick } from '@angular/core/testing';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
    id : number;
    employee : Employee;

    constructor(private route:ActivatedRoute, private empployeeService:EmployeeService){}
    
    ngOnInit(){
      this.id = this.route.snapshot.params['id'];
      this.empployeeService.getEmployeeById(this.id).subscribe( data => {
        this.employee = data;
      });
    }

}
