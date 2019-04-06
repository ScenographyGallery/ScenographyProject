import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'sc-auth',
  templateUrl: './home-auth.component.html',
  styleUrls: ['./home-auth.component.scss']
})
export class HomeAuthComponent implements OnInit {
  @ViewChild('userOptionsForms')
  private userOptionsForms: ElementRef;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  handleSignup() {
    this.renderer.addClass(this.userOptionsForms.nativeElement, 'bounceLeft');
    this.renderer.removeClass(this.userOptionsForms.nativeElement, 'bounceRight');
  }

  handleLogin() {
    this.renderer.removeClass(this.userOptionsForms.nativeElement, 'bounceLeft');
    this.renderer.addClass(this.userOptionsForms.nativeElement, 'bounceRight');
  }
}
