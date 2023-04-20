import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success("İşlem Başarı İle Gerçekleşti.");
  }

  showError() {
    this.toastr.error("İşlem Gerçekleştirilemedi.");
  }

  
}
