import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  start = 'start';
  center = 'center';
  end = 'end';
  left = 'left';
  right = 'right';
  top = 'top';
  bottom = 'bottom';
  soy = 'soy => ';

  constructor(public snackBar: MatSnackBar) {}

  onTiempoCenter(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  onCenter(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  onend(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

  onleft(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }

  onRigth(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  onStrar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }

  onVBottom(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  onVTop(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: [className], // clase o estilo para custon
    });
  }
}

// export declare type MatSnackBarHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
// /** Possible values for verticalPosition on MatSnackBarConfig. */
// export declare type MatSnackBarVerticalPosition = 'top' | 'bottom';
