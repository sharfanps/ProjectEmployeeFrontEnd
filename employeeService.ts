import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee/employee';
import { EmployeeModel } from './employee-model';
import { $locationShim } from '@angular/common/upgrade';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  url="http://localhost:8087/";

  constructor(private http:HttpClient){}

    getEmployeeById(id: number): Observable<EmployeeModel[]>{
      console.log("Service");
    return this.http.get<EmployeeModel[]>((`${this.url}get/${id}`));
  }

  
    editEmployee(id: number):Observable<EmployeeModel[]> {
        const httpOptions={
       headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType:'text' as const
    };
    
      return this.http.put<EmployeeModel[]>((`${this.url}edit/${id}`),httpOptions);
  }
  deleteEmployee(id: number):Observable<string> {
    const httpOptions={
       headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType:'text' as const
    };
    
    return this.http.delete(`${this.url}${id}`,httpOptions);
  }
  getEmployeeList(): Observable<EmployeeModel[]>
  {
    
     return  this.http.get<EmployeeModel[]>(`${this.url}`);
  }
  
    postEmployee(employee: EmployeeModel):Observable<string> {
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType:'text' as 'json'
    };
    return this.http.post<string>((`${this.url}post`),employee,httpOptions);
  }
}
