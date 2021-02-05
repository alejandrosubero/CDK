import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActionButtonComponent } from 'src/app/action-button/action-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoMaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ActionButtonComponent,],
  imports: [
    CommonModule,
    PortalModule,
    FlexLayoutModule,
    DemoMaterialModule,
  ],
  entryComponents: [ActionButtonComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    ActionButtonComponent, 
    DemoMaterialModule
  ]
})
export class ShareModule { }
