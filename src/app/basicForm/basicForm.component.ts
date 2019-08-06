import { Component, OnInit, Host } from '@angular/core';

@Component({
  selector: 'basic-template-driven-form',
  templateUrl: './basicForm.component.html'
})
export class BasicFormComponent implements OnInit {
  form: any;
  years: string[];
  submitted: boolean = false;
  constructor() { }
  ngOnInit() {
    this.years = ['2018', '2019'];
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }
}
