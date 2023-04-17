import { AfterViewInit,Component,EventEmitter,Input,OnInit,Output,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/tabella/services/employee.service';
import {Employee,ServerData} from 'src/app/tabella/types/Employee';
@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {
 data: ServerData |undefined;
dataSource:MatTableDataSource<Employee>;
displayColumns: string[]=["id","birthDate","firstName","lastName","gender","hireDate"];

constructor(private employeeService:EmployeeService){
    this.loadData("http://localhost:8080/employees");
    this.dataSource=new MatTableDataSource(this.data?._embedded.employees);
}
ngyOnInit():void{
}

loadData(url:string){
    this.employeeService.getData(url).subscribe(
        serverResponse =>{
            this.data=serverResponse;
            this.dataSource.data=this.data._embedded.employees;
        }
    )
  }

 nextPage(){
    if(this.data)this.loadData(this.data._links.next.href)
 }
 prevPage(){
    if(this.data)this.loadData(this.data._links.prev.href)
 }
 firstPage(){
    if(this.data)this.loadData(this.data._links.first.href)
 }
 lastPage(){
    if(this.data)this.loadData(this.data._links.last.href)
 }
}
  data = [
    {
        "id": 10001,
        "birthDate": "1953-09-02",
        "firstName": "Georgi",
        "lastName": "Facello",
        "gender": "M",
        "hireDate": "1986-06-26",
    },
    {
        "id": 10002,
        "birthDate": "1964-06-02",
        "firstName": "Bezalel",
        "lastName": "Simmel",
        "gender": "F",
        "hireDate": "1985-11-21",
    },
    {
        "id": 10003,
        "birthDate": "1959-12-03",
        "firstName": "Parto",
        "lastName": "Bamford",
        "gender": "M",
        "hireDate": "1986-08-28",
    },
    {
        "id": 10004,
        "birthDate": "1954-05-01",
        "firstName": "Chirstian",
        "lastName": "Koblick",
        "gender": "M",
        "hireDate": "1986-12-01",
    },
    {
        "id": 10005,
        "birthDate": "1955-01-21",
        "firstName": "Kyoichi",
        "lastName": "Maliniak",
        "gender": "M",
        "hireDate": "1989-09-12",
    },
    {
        "id": 10006,
        "birthDate": "1953-04-20",
        "firstName": "Anneke",
        "lastName": "Preusig",
        "gender": "F",
        "hireDate": "1989-06-02",
    },
    {
        "id": 10007,
        "birthDate": "1957-05-23",
        "firstName": "Tzvetan",
        "lastName": "Zielinski",
        "gender": "F",
        "hireDate": "1989-02-10",
    },
    {
        "id": 10008,
        "birthDate": "1958-02-19",
        "firstName": "Saniya",
        "lastName": "Kalloufi",
        "gender": "M",
        "hireDate": "1994-09-15",
    },
    {
        "id": 10009,
        "birthDate": "1952-04-19",
        "firstName": "Sumant",
        "lastName": "Peac",
        "gender": "F",
        "hireDate": "1985-02-18",
    },
    {
        "id": 10010,
        "birthDate": "1963-06-01",
        "firstName": "Duangkaew",
        "lastName": "Piveteau",
        "gender": "F",
        "hireDate": "1989-08-24",
    },
  ]

