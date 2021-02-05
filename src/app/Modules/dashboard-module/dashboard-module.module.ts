import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/componet/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [ 
    DashboardComponent, 
   ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent},
     
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModuleModule { 

  
}
