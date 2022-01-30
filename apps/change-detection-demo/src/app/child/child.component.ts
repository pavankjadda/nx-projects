import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../app.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <div *ngIf='getEmployee()' style='margin-top: 20px'>
      <hr />
      <h2>Child 1</h2>
      Employee Name in Child1: {{employee.name}} <br />
      Employee Age in Child1: {{employee.age}}

      <div style='margin-top: 20px'>
        Employee Observable Name in Child1: {{(employee$|async)?.name}} <br />
        Employee Observable Age in Child1: {{(employee$|async)?.age}}
      </div>
    </div>


  `,
  styles: [],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() employee!: Employee;
  @Input() employee$!: BehaviorSubject<Employee>;

  constructor() {
  }

  ngOnInit(): void {
  }

  getEmployee() {
    return this.employee$.value !== undefined;
  }
}
