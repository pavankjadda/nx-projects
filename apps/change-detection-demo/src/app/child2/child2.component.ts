import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Employee } from '../app.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child2',
  template: `
    <div style='margin: 20px'>
      <hr />
      <h2>Child 2</h2>
      Employee Name in Child2: {{employee.name}} <br />
      Employee Age in Child2: {{employee.age}}
      <div style='margin-top: 20px'>
        Employee Observable Name in Child2: {{(employee$|async)?.name}} <br />
        Employee Observable Age in Child2: {{(employee$|async)?.age}}
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Child2Component implements OnInit {
  @Input() employee!: Employee;
  @Input() employee$!: BehaviorSubject<Employee>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
