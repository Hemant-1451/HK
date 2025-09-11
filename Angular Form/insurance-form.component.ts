import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.scss']
})
export class InsuranceFormComponent implements OnInit {
  
  // Form Group for reactive form
  insuranceForm: FormGroup;
  
  // Debug flag (optional)
  showDebug: boolean = false;

  constructor(private fb: FormBuilder) {
    // Initialize the reactive form
    this.initializeForm();
  }

  ngOnInit(): void {
    // Any initialization logic can go here
    console.log('Insurance Form Component initialized');
  }

  /**
   * Initialize the reactive form with FormControls and validators
   */
  private initializeForm(): void {
    this.insuranceForm = this.fb.group({
      // Yes/No choice for current insurance coverage
      currentInsuranceCoverage: ['', Validators.required],
      
      // Insurance company dropdown
      insuranceCompany: ['', Validators.required],
      
      // Years insured dropdown
      yearsInsured: ['', Validators.required],
      
      // BI limits dropdown
      biLimits: ['', Validators.required]
    });

    // Optional: Subscribe to form value changes for real-time debugging
    this.insuranceForm.valueChanges.subscribe(value => {
      console.log('Form value changed:', value);
    });

    // Optional: Subscribe to form status changes
    this.insuranceForm.statusChanges.subscribe(status => {
      console.log('Form status changed:', status);
    });
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    console.log('Form submitted!');
    
    if (this.insuranceForm.valid) {
      // Get form values
      const formValues = this.insuranceForm.value;
      
      // Print form values to console as requested
      console.log('=== INSURANCE FORM VALUES ===');
      console.log('Current Insurance Coverage:', formValues.currentInsuranceCoverage);
      console.log('Insurance Company:', formValues.insuranceCompany);
      console.log('Years Insured:', formValues.yearsInsured);
      console.log('BI Limits:', formValues.biLimits);
      console.log('Complete Form Object:', formValues);
      console.log('=============================');
      
      // Here you would typically send the data to a service
      // this.insuranceService.submitForm(formValues);
      
      // Show success message (optional)
      alert('Form submitted successfully! Check console for values.');
      
    } else {
      // Mark all fields as touched to show validation errors
      this.markFormGroupTouched();
      
      console.log('Form is invalid. Please check all required fields.');
      alert('Please fill in all required fields.');
    }
  }

  /**
   * Mark all form controls as touched to trigger validation display
   */
  private markFormGroupTouched(): void {
    Object.keys(this.insuranceForm.controls).forEach(key => {
      const control = this.insuranceForm.get(key);
      control?.markAsTouched();
    });
  }

  /**
   * Reset the form to initial state
   */
  resetForm(): void {
    this.insuranceForm.reset();
    console.log('Form reset');
  }

  /**
   * Get form control for template access
   */
  getFormControl(controlName: string) {
    return this.insuranceForm.get(controlName);
  }

  /**
   * Check if a specific field has an error
   */
  hasError(controlName: string, errorType: string): boolean {
    const control = this.insuranceForm.get(controlName);
    return control ? control.hasError(errorType) && control.touched : false;
  }

  /**
   * Toggle debug mode
   */
  toggleDebug(): void {
    this.showDebug = !this.showDebug;
  }

  /**
   * Set form values programmatically (useful for testing or pre-filling)
   */
  setFormValues(values: any): void {
    this.insuranceForm.patchValue(values);
  }

  /**
   * Get current form values
   */
  getCurrentFormValues(): any {
    return this.insuranceForm.value;
  }

  /**
   * Check if form is valid
   */
  isFormValid(): boolean {
    return this.insuranceForm.valid;
  }
}