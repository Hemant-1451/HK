# Insurance Form - Angular Material Reactive Form

A complete Angular Material Reactive Form implementation with the following features:

## 🎯 Form Fields

- **Yes/No Choice**: `mat-button-toggle-group` for current insurance coverage
- **Insurance Company**: `mat-select` dropdown with 3 options
- **Years Insured**: `mat-select` dropdown (1, 2, 3, 4, 5+ years)
- **BI Limits**: `mat-select` dropdown with 3 options
- **Continue Button**: `mat-raised-button` with primary color

## 🚀 Features

- ✅ **Reactive Form**: Built with `FormGroup` and `FormControl`
- ✅ **Angular Material Design**: Modern Material Design components
- ✅ **Form Validation**: Required field validation with error messages
- ✅ **Disabled Native Validation**: Uses `novalidate` attribute
- ✅ **Console Logging**: Prints form values to console on submit
- ✅ **Responsive Design**: Mobile-friendly layout
- ✅ **TypeScript**: Fully typed component code

## 📁 File Structure

```
insurance-form/
├── app.component.html          # Main app template
├── app.component.scss          # Main app styles
├── app.component.ts            # Main app component
├── app.module.ts               # Angular module configuration
├── insurance-form.component.html   # Form template
├── insurance-form.component.scss   # Form styles
├── insurance-form.component.ts     # Form component logic
├── main.ts                     # Application bootstrap
├── styles.scss                 # Global styles
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🛠️ Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   ng serve
   ```

3. **Open Browser**:
   Navigate to `http://localhost:4200`

## 📋 Form Structure

### Form Controls

| Field | FormControlName | Type | Options |
|-------|----------------|------|---------|
| Current Insurance | `currentInsuranceCoverage` | Toggle | Yes/No |
| Insurance Company | `insuranceCompany` | Select | AllState, GEICO, Progressive |
| Years Insured | `yearsInsured` | Select | 1, 2, 3, 4, 5+ years |
| BI Limits | `biLimits` | Select | $15K/$30K, $25K/$50K, $100K/$300K |

### Validation

- All fields are **required**
- Form validation is handled by Angular Reactive Forms
- Error messages display when fields are touched and invalid
- Submit button is disabled when form is invalid

## 🎨 Styling

- **Material Design**: Uses Angular Material components
- **Responsive**: Mobile-first design approach
- **Custom Styling**: Enhanced with custom SCSS
- **Animations**: Smooth transitions and hover effects

## 🔧 Component Methods

### Public Methods

- `onSubmit()`: Handles form submission
- `resetForm()`: Resets form to initial state
- `getFormControl(controlName)`: Gets form control reference
- `hasError(controlName, errorType)`: Checks for specific errors
- `setFormValues(values)`: Programmatically set form values
- `getCurrentFormValues()`: Get current form values
- `isFormValid()`: Check if form is valid

### Console Output

When the form is submitted, the following data is logged to the console:

```javascript
=== INSURANCE FORM VALUES ===
Current Insurance Coverage: "yes" or "no"
Insurance Company: "allstate" | "geico" | "progressive"
Years Insured: "1" | "2" | "3" | "4" | "5+"
BI Limits: "15/30" | "25/50" | "100/300"
Complete Form Object: { ... }
=============================
```

## 🧪 Testing

The form includes debug functionality:

- Toggle debug mode to see form state
- Real-time form value changes logging
- Form status changes monitoring

## 📱 Responsive Design

- **Desktop**: Full-width form with side-by-side layout
- **Tablet**: Adjusted spacing and button sizes
- **Mobile**: Stacked layout with full-width buttons

## 🎯 VWO Integration Ready

This form is designed to work seamlessly with VWO (Visual Website Optimizer):

- Unique form control names for tracking
- Proper form structure for data collection
- Console logging for debugging
- Form validation for user experience

## 🔄 Form Lifecycle

1. **Initialization**: Form is created with validators
2. **User Interaction**: Real-time validation and value tracking
3. **Submission**: Data collection and console logging
4. **Reset**: Form returns to initial state

## 🚀 Production Ready

- TypeScript for type safety
- Proper error handling
- Responsive design
- Accessibility features
- Clean, maintainable code structure

---

**Built with Angular 17 & Angular Material**
