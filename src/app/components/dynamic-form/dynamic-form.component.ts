import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  public dynamicForm: FormGroup;
  public sentStatuses = ['Already sent', 'Not sent yet'];

  constructor() { }

  ngOnInit(): void {
    this.dynamicForm = new FormGroup({
      'sentStatus': new FormControl(null, Validators.required),
      'alreadySent': new FormGroup({
        'document': new FormControl(null, Validators.required),
        'sendDate': new FormControl(null, Validators.required),
        'comment': new FormControl(null)
      }),
      'notSentYet': new FormGroup({
        'passportNumber': new FormControl(null, Validators.required)
      }),
      'urgentStatus': new FormControl(null, Validators.required),
      'deadline': new FormControl(null, Validators.required) //
    })
  }

  public onSubmit(): void {
    console.log(this.dynamicForm)
  }
}
