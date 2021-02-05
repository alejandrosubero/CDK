import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/services/alertas.service';
import { NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private not:NotificacionService) { }

  ngOnInit(): void {  }

  handle(){
    console.log('Tasks-1');
  }

  on0(){  this.not.onVTop('success mensaje')}

  on1(){ this.not.onVTop('error Mensaje') }
  

}
