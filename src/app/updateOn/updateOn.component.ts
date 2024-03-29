import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ValidationService } from '../shared/validation.service';

@Component({
    selector: 'update-on-form',
    templateUrl: './updateOn.component.html'
})
export class UpdateOnComponent implements OnInit {
    model: Hero;  
    submittedModel: Hero; 
    heroForm: FormGroup;
    years: string[];
    templateSubmitted = false;
    reactiveSubmitted = false;
    
    constructor(private formBuilder: FormBuilder) { }
    
    ngOnInit() {
        this.model = new Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', 'iq@superhero.com');
  
        this.years = ['Really Smart', 'Turbulent Breeze', 
                       'Super Hot', 'Weather Changer'];

       

        this.heroForm = new FormGroup({
           
            name:     new FormControl(this.model.name, Validators.required ),
            herdId: new FormControl(this.model.herdId, Validators.required),
            email:    new FormControl(this.model.email, { validators: [Validators.required, ValidationService.emailValidator] }),
            power:    new FormControl(this.model.power, Validators.required)
        }, { updateOn: 'blur' });
    }

    updateOnForAll() {
        //this.heroForm.setValue({ updateOn: 'blue'});
    }
  
    submit() {
      this.templateSubmitted = true;
    }

    reactiveSubmit() {
        this.reactiveSubmitted = true;
        this.submittedModel = this.heroForm.value;
      }

}