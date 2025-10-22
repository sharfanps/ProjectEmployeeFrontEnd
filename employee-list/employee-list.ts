import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employeeService';
import { Employee } from '../employee/employee';
import { EmployeeModel } from '../employee-model';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {
 employee: EmployeeModel[]=[];
constructor(private empServe: EmployeeService,private router:Router)
{

}
 
  ngOnInit(): void {
  this.getEmployee();
  
  }
  getEmployee()
  {
    this.empServe.getEmployeeList().subscribe(res=>{
    this.employee=res;
    console.log(res);
    }  
    );
  }
  editEmployee(id:number)
  {
    // this.empServe.editEmployee(id).subscribe(res=>{
    // console.log("employee to edit is : ");
    // console.log(res);
    // });
  }
getEmpById(id:number)
{
 this.empServe.getEmployeeById(id).subscribe(res=>
    {
      console.log("employee : ");
      console.log(res);
      this.router.navigate([''],{state:{res}});
    });
    
    
}
   
  
  deleteEmployee(id:number)
  {
    this.empServe.deleteEmployee(id).subscribe(res =>{
    console.log(res);
    this.getEmployee();
    
    });

  }


}
