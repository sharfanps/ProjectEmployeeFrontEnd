import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../employeeService';
import { EmployeeModel } from '../employee-model';
import { FormsModule, NgForm } from '@angular/forms';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-employee',
  imports: [RouterModule,FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {
constructor(private empServe: EmployeeService, private router:Router){}
employee:  EmployeeModel= new EmployeeModel();
list()
{
this.empServe.getEmployeeList();
}
 ngOnInit(): void {
  if(history.state.res)
  {
    this.employee=history.state.res;
    history.replaceState({},'');
    console.log("Employee edit: "+JSON.stringify(this.employee));

  } 
  else
  {
    this.employee= new EmployeeModel();
    console.log("Employee new : "+JSON.stringify(this.employee));
  }  
  }
onSubmit(form:NgForm)
{
console.log(this.employee);
this.empServe.postEmployee(this.employee).subscribe({
  next:(res)=>
  {
console.log('Employee added successfully:', res);
  }, 
  error: (error) => {
          console.error('Error adding employee:', error);
        },
      complete: ()=>
      {
        console.log('success');
      }});
     // this.employee={};
      form.resetForm();
}

}
