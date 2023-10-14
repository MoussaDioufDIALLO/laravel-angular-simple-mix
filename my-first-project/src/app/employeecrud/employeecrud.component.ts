import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeecrudComponent implements OnInit
{
  EmployeeArray : any[] = [];
  isResultLoaded = false; 
  isUpdateFormActive = false; 

  name: string ="";
  address: string ="";
  mobile: Number=0; 

  currentEmployeeID = "";

  constructor(private http: HttpClient ) {
      this.getAllEmployee();
  }
  ngOnInit(): void {    
  }
  getAllEmployee(){
    this.http.get("http://localhost:8000/api/employees")
      .subscribe((resultData: any)=>
      {
        this.isResultLoaded = true; 
        console.log(resultData);
        this.EmployeeArray = resultData; 
        this.name = '';
        this.address = '';
        this.mobile = 0;
      });
  }
  register()
    {
      let bodyData = 
      {
        "name" : this.name,
        "address" : this.name, 
        "mobile" : this.mobile
      }; 
      this.http.post("http://127.0.0.1:8000/api/save", bodyData).subscribe((resultData: any)=>
      {
        console.log(resultData);
        alert("Employee Resistered succesfully"); 
        this.getAllEmployee();
        this.name="";
        this.address="";
        this.mobile=0;
      });
    }
    save()
    {
      this.register(); 
    }
}
