import { AbstractControl } from '@angular/forms';

export function UrlValidator(control: AbstractControl) {
  if (control.value.startsWith('https') && (control.value.includes('.jpg') || control.value.includes('.png'))) {
    return { validUrl: true };
  }
  return null;
}
