import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public userData: FormGroup;

  constructor(private route: Router, private formBuilder: FormBuilder) {
    this.userData = this.configureFormGroup();
  }

  configureFormGroup(): FormGroup {
    return this.formBuilder.group({
      nickname: ''
    });
  }

  gotoChat() {
    this.route.navigateByUrl('/chat', {
      state: { userData: this.userData.value }
    });
  }
}
