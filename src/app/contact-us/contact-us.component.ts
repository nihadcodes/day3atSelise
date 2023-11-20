import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  myReactiveForm: FormGroup | any;
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(),
      'email': new FormControl(),
      'series': new FormArray([
        new FormControl()
      ])
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm.value);
    this.submitted = true;
  }

  addSeries() {
    (<FormArray>this.myReactiveForm.get('series')).push(
      new FormControl('')
    );
  }

  removeSeries(idx: number) {
    (<FormArray>this.myReactiveForm.get('series')).removeAt(idx);
  }
}
