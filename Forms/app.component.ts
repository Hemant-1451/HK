// app.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  insuranceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.insuranceForm = this.fb.group({
      currentInsuranceCoverage: [''],
      lapseInCoverage: [''],
      priorCarrierName: [''],
      yearsInsured: [''],
      biLimits: [''],
    });
  }

  onSubmit() {
    console.log(this.insuranceForm.value);
  }
}
