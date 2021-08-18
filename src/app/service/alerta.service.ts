import { Injectable } from '@angular/core';
import{ BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertaComponent } from '../alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(
    private bdModalService: BsModalService
  ) { }

  private showAlert(message: String, type: String){
    const bsModalRef:BsModalRef = this.bdModalService.show(AlertaComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = message
  }

  showAlertDanger(message: string){
    this.showAlert(message, 'danger')
  }

  showAlertSuccess(message: string){
    this.showAlert(message, 'success')
  }

  showAlertInfo(message: string){
    this.showAlert(message, 'info')
  }
}
