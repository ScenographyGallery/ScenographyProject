import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormCreatorService} from '../../shared/services/form-creator.service';
import {AuthService} from '../../shared/services/auth.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'sc-auth',
  templateUrl: './home-auth.component.html',
  styleUrls: ['./home-auth.component.scss']
})
export class HomeAuthComponent implements OnInit {

  // Form creator service
  public loginForm: FormGroup = this.formCreatorService.loginForm();
  public signupForm: FormGroup = this.formCreatorService.signupForm();

  @ViewChild('userOptionsForms')
  private userOptionsForms: ElementRef;

  isAuthFormSubmitted: boolean;
  isSignupFormSubmitted: boolean;

  constructor(
    private formCreatorService: FormCreatorService,
    private renderer: Renderer2,
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {
    // TODO: forgot password
  }

  get login() { return this.loginForm.controls; }
  get signup() { return this.signupForm.controls; }

  handleLoginAuth() {
    this.isAuthFormSubmitted = true;
    // If form input invalid, stop function
    if (this.loginForm.invalid) { return; }

    const data = {
      email: this.login.email.value,
      password: this.login.password.value,
    };

    // this.authService.login(data).subscribe((res) => {
    //   console.log(res);
    // });

    console.log('Data is valid, user is logged');
    console.log(data);
  }

  handleSignupFormAuth() {
    this.isSignupFormSubmitted = true;
    // If form input invalid, stop function
    if (this.signupForm.invalid) { return; }

    const data = {
      name: this.signup.name.value,
      email: this.signup.email.value,
      password: this.signup.password.value,
    };

    // this.authService.signup(data).subscribe((res) => {
    //   console.log(res);
    // });

    console.log('Data is valid, user registered');
    console.log(data);
  }

  handleSignupForm() {
    this.renderer.addClass(this.userOptionsForms.nativeElement, 'bounceLeft');
    this.renderer.removeClass(this.userOptionsForms.nativeElement, 'bounceRight');
  }

  handleLoginForm() {
    this.renderer.removeClass(this.userOptionsForms.nativeElement, 'bounceLeft');
    this.renderer.addClass(this.userOptionsForms.nativeElement, 'bounceRight');
  }
}
