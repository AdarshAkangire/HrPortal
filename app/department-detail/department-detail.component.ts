import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-department-detail',
  template: `
    <table [style.width]="'100%'" [style.text-align]="'center'" class="heading">
    <tr>
    <th>Employee_Name</th>
    <th>EMployee_Id</th>
    <th>Employee_Post</th>
    </tr>
    <tr *ngFor="let value of arr;index as i">
    <td>{{arr[i].Name}}</td>
    <td>{{arr[i].Id}}</td>
    <td>{{arr[i].Post}}</td>
    </tr>
    </table>
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId : any;
  public arr:any;

  constructor(private route: ActivatedRoute, private router: Router,private Obj:DemoService) 
  {
    console.log("department detail constuctor has been called")

  }

  ngOnInit() 
  {
    console.log("department detail ngonit has been called");
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;
      console.log(this.departmentId);
      this.arr=this.Obj.GetDetails(id).subscribe(Data=>this.arr=Data)

    });
  }

  gotoDepartments() 
  {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route});
  }
}
