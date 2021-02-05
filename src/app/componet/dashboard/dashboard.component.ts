import { Component, OnInit } from '@angular/core';
import { NotificacionService } from 'src/app/services/notificacion.service';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  animalControl: FormControl;
 

  public mensaje = 'hola';
  mensajetooltip = '';
  public matPosition='above';

  constructor(private not: NotificacionService) {

    this.builderForm();

  }

  ngOnInit(): void { }



  handleMetaSignalChange(metaSignal: string, event: any) {
    if (event.isUserInput) {    // ignore on deselection of the previous option
      console.log('Changed: ' + metaSignal + event.isUserInput);
      this.mensaje = metaSignal;

    }
  }

//   onSelectionChanged(option) {
//     if(option.isUserInput==true){
//        console.log('Selected ' + option.name);
//     }
//  }


  builderForm() {
    this.animalControl = new FormControl('', Validators.required);
  }


  handle() {
    console.log('Dashboard-1');
  }

  on0() { this.not.onTiempoCenter(this.mensaje); }
  on1() { this.not.onRigth(this.mensaje); }
  on2() { this.not.onleft(this.mensaje); }
  on3() { this.not.onStrar(this.mensaje); }
  on4() { this.not.onend(this.mensaje); }
  on5() { this.not.onVTop(this.mensaje); }
  on6() { this.not.onVBottom(this.mensaje); }
  on7() { this.not.onCenter(this.mensaje); }

on8(){
  this.not.openSnackBar(this.mensaje, 'Close', 'error-snackbar2');
}

  mensa: Animal[] = [
    { name: 'Alerta sobre  plazo vacio', mensage: 'Se debe llenar el plazo de vencimiento para enviar al sistema Transaccional de Legales' },
    { name: 'Alerta sobre  plazo Formato no seleccionado o vacio', mensage: 'Se debe llenar el formato del plazo de vencimiento para enviar al sistema Transaccional de Legales' },

    { name: 'Alerta sobre  asignar Personal para envió al Transaccional', mensage: 'Se debe de asignar una persona para tratar el documento antes de ser enviado' },
    { name: 'Alerta sobre  envió ok al Transaccional', mensage: 'Se envió correctamente al sistema transaccional de Legales.' },
    { name: 'Alerta sobre  envió fallido o noOk al Transaccional', mensage: 'Ocurrió un error en él envió al sistema transaccional de Legales. Id_Error: SE VE EL ID DEL ERROR' },
    { name: 'Alerta sobre  error en el envió al Transaccional', mensage: 'Error Durante el envio al Transacional de legales ' },
    { name: 'Alerta sobre  error en el envió al Transaccional', mensage: 'Error Durante el envio al Transacional de legales ' + ' Comunicarse con Mesa de Ayuda el error emitido por el servidor es: ' + ' En esta parte se coloca el Error que viene del servidor ' },
    

    { name: 'Alerta sobre  campo Observaciones vacio', mensage: + 'Complete todos los datos en ' + 'this.campovacios : "Campo Observaciones" ' + ' para enviar documento' },
    { name: 'Alerta sobre  campos de la seccion de Ingreso de Datos', mensage: ' "La sección de Ingreso de Datos Tap (1) hay datos sin completar"' },

    { name: 'Alerta sobre  Navegator no esta conectado a la red', mensage: 'El navegador NO está conectado a la red verifique la conexion a la red o puede intentar más tarde' },

    { name: 'Alerta sobre  envió Presentación Completado', mensage: 'Se Completa el envió del Documento' },
    { name: 'Alerta sobre  envió Presentación fallido', mensage: 'Falla el envió de Presentación a Mesa de Entrada ' + ' Comunicarse con Mesa de Ayuda, el error emitido por el servidor es: ' + 'Falla: (null, una respuesta del servidor 500) ' },
    { name: 'Alerta sobre  envió Presentación con Error', mensage: 'Error de envió de Presentación ' + ' Comunicarse con Mesa de Ayuda, el error emitido por el servidor es: ' + 'Error: (null, una respuesta del servidor 500) '},

    { name: 'Alerta sobre  Recuperación de combo tipo Documentos', mensage: 'Error en el servicio de Recuperación de Documentos'+' Comunicarse con Mesa de Ayuda el error emitido por el servidor es: Servicio para Recuperar de Tipo de Documento fallo.'},
    { name: 'Alerta sobre  Recuperación de combo Sub tipo Documentos', mensage: 'Error en el servicio de Recuperación de Documentos'+' Comunicarse con Mesa de Ayuda el error emitido por el servidor es: Servicio para Recuperar de Sub-Tipo de Documento fallo.'},

    { name: 'Alerta sobre  Recuperación de combo Organismo', mensage: 'Error en el servicio de Recuperación de Documentos'+' Comunicarse con Mesa de Ayuda el error emitido por el servidor es: Servicio para Recuperar Organismo fallo.'},
    { name: 'Alerta sobre  Recuperación de combo Motivo', mensage: 'Error en el servicio de Recuperación de Documentos'+' Comunicarse con Mesa de Ayuda el error emitido por el servidor es: Servicio para Recuperar Motivo fallo.'},

    { name: 'Alerta sobre  Error al Asociar código de Barras', mensage: 'Error al intentar Asociar el código de Barras al documento'+ ' Comunicarse con Mesa de Ayuda el error emitido por el servidor es: ' + ' Error: (null, una respuesta del servidor 500)' },
    { name: 'Alerta sobre  Error al Crear código de Barras', mensage: 'Error en el servicio de Generar el código de Barras' + ' Comunicarse con Mesa de Ayuda el error emitido por el servidor es: ' + ' Error: (null, una respuesta del servidor 500)'},
    { name: 'Alerta sobre  Error al Obtener código de Barras', mensage: 'Error en el servicio de Obtener el código de Barras' + ' Comunicarse con Mesa de Ayuda el error emitido por el servidor es: ' + ' Error: (null, una respuesta del servidor 500)'},
   
    { name: 'Alerta sobre  sucursal  NoFound', mensage: 'No se encuentra la Sucursal ' },
    { name: 'Alerta sobre  sucursal Filtrado Mensage', mensage: 'No se encuentra la Sucursal  con Número: ' },
    
    { name: 'Alerta sobre  Notificación  de Envío titulo', mensage: 'Notificación  de Envío - Transaccional de Legales' },
    { name: 'Alerta sobre  no envío al al Transaccional de Legales', mensage: 'No ha realizado envíos al Transaccional de Legales.' + '\nDesea Continuar?' },

    { name: 'Alerta sobre   envío correo Completado', mensage: 'Se Procesa satisfactoriamente él envió Documento y Ocurre Fallo  el Servicio de Envió de Correo.' },

    { name: 'Alerta sobre   envío correo Error', mensage: 'Ocurre Fallo el Servicio de Envió de Correo'+ ' Comunicarse con Mesa de Ayuda el error emitido por el servidor es: ' + ' Error: (null, una respuesta del servidor 500)'},
    
    { name: 'Alerta sobre  Fallo el envío a la casilla de Inspecciones', mensage: 'Fallo el envío a la casilla de Inspecciones, Continuar para reintentar o cancelar para Salir' + '\nEl Error Ocurrido fue:  \n' + '\nNOTA: ESTO ES UN TITULO DE POPUP DE REINTENTO DE ENVIO\n'},
    { name: 'Alerta sobre  Notificación de Envío de correo Casilla titulo', mensage: 'Notificación  de Envío de correo a - Inspecciones@redcoto.com.ar // NOTA: ESTO ES UN TITULO DE POPUP DE REINTENTO DE ENVIO' },

    { name: 'Alerta sobre  Fallo el envío correo Rechazo de Inspecciones', mensage: 'Fallo el envío del correo por Rechazo en Mesa de Entrada, Continuar para reintentar o cancelar para Salir' + '\nEl Error Ocurrido fue:  \n' + '\nNOTA: ESTO ES UN TITULO DE POPUP DE REINTENTO DE ENVIO\n'},
    { name: 'Alerta sobre  Notificación  de Envío de correo Rechazo titulo', mensage: 'Notificación  de Envío de correo a - Inspecciones@redcoto.com.ar NOTA: ESTO ES UN TITULO DE POPUP DE REINTENTO DE ENVIO' },

    { name: 'Alerta sobre  Subir archivo Completada', mensage: 'Subida Completa del archivo: "ID_Instancia proceso se coloca en este punto".  ("{ duration del mensaje y se cierra: 2500 }") ' },
    { name: 'Alerta sobre  Error al Subir archivo ', mensage: 'Ocurre un Error al Subir archivo, ' + ' Comunicarse con Mesa de Ayuda el error emitido por el servidor es: ' + ' Error: (null, una respuesta del servidor 500)'},

    { name: 'Alerta sobre  formato de  archivo ', mensage: 'Solo se puede agregar Archivos (.pdf, .doc, .docx, .xlsx, .xlsm, .xls, .txt, .jpg, .jpeg, .png )'},
    { name: 'Alerta sobre  tamaño de Archivo ', mensage: 'No se pude agregar Archivos mayores de 20Mb'},
    { name: 'Alerta sobre  tamaño del total de Archivos Adjuntos ', mensage: 'No se pude agregar más de 20MB en archivos adjuntos  y  con el archivo seleccionado estaria agregando xxMB en adjuntos'},
    { name: 'Alerta sobre  Error al obtener tamaño de los archivos Adjuntos', mensage: 'Error al obtener el tamaño de los archivos Adjuntos, ' +' Comunicarse con Mesa de Ayuda, presentación id: "id_InstanciaProceso", el error emitido por el servidor es:  NO SE PUDO RECUPERAR EL LEGAJO DEL EMISOR (LEGAJO DE CARGA)'}
  ];


}


interface Animal {
  name: string;
  mensage: string;
}

