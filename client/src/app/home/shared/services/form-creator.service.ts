import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormCreatorService {
  constructor(private fb: FormBuilder) { }

  public loginForm(): FormGroup {
    return this.fb.group({
      email: ['',  Validators.required],
      password: ['',  Validators.required]
    });
  }

  public signupForm(): FormGroup {
    return this.fb.group({
      name: ['',  Validators.required],
      email: ['',  Validators.required],
      password: ['',  Validators.required],
    });
  }
}
