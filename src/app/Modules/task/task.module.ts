import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from 'src/app/componet/tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [ 
    TasksComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      { path: '', component: TasksComponent},
     
    ]),
  ]
})
export class TaskModule { }
