import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  showSuccess(message: string): void {
    this.showAlert('alert-success', message);
  }

  showError(message: string): void {
    this.showAlert('alert-danger', message);
  }

  private showAlert(className: string, message: string): void {
    const alertContainer = document.getElementById('alert-container');

    if (alertContainer) {
      // Crear la alerta
      const alertElement = document.createElement('div');
      alertElement.className = `alert ${className}`;
      alertElement.innerHTML = `<strong>${message}</strong>`;

      // Agregar la alerta al contenedor
      alertContainer.appendChild(alertElement);

      // Eliminar la alerta después de un tiempo (por ejemplo, 5 segundos)
      setTimeout(() => {
        alertContainer.removeChild(alertElement);
      }, 5000);
    }
  }
}
