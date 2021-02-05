import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './componet/footer/footer.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { HomeComponent } from './componet/home/home.component';
import { SupportComponent } from './componet/support/support.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from './Modules/share/share.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// serices
import { NotificacionService } from './services/notificacion.service';

// mat in app module 
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';





import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    ShareModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'dashboard',
        loadChildren: () => import('./Modules/dashboard-module/dashboard-module.module').then(mod => mod.DashboardModuleModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./Modules/task/task.module').then(mod => mod.TaskModule)
      },
      { path: 'support', component: SupportComponent },
    ])
  ],
  entryComponents: [],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    NotificacionService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
