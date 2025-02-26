import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-event-registration',
  standalone: true,
  imports: [ReactiveFormsModule, 
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule, 
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSlideToggleModule],
  templateUrl: './event-registration.component.html',
  styleUrl: './event-registration.component.css'
})
export class EventRegistrationComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  birthDate!: Date;
  address: string = '';
  gender: string = '';
  submitted = false;

  maxBirthDate: Date = new Date ('2006-12-31')
  isDarkMode = false;
  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^[A-Za-z][A-Za-z0-9]{7,}$/)]), 
    gender: new FormControl('', [Validators.required]), 
    birthDate: new FormControl('', [Validators.required,]), 
    address: new FormControl(''), 
  })
    onClickSubmit(data: {
    userName:string;
    email: string;
    password: string;
    gender: string;
    birthDate: Date;
    address: string;
  })
  {
    this.submitted = true;
    this.userName = data.userName;
    this.email= data.email
    this.password = data.password;
    this.gender = data.gender;
    this.birthDate = data.birthDate;
    this.address = data.address;
 
    if (this.formdata.valid) {
      console.log("Form Submitted!", this.formdata.value);
    } else {
      console.log("Form is not valid!");
    } 
  }
  toggleDarkMode() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
