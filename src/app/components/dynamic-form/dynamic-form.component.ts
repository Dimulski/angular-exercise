import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  public dynamicForm: FormGroup;
  public sentStatuses = ['Already sent', 'Not sent yet'];
  public urgencyState = ['Urgent', 'Not urgent'];

  constructor() { }

  ngOnInit(): void {
    this.dynamicForm = new FormGroup({
      'sentStatus': new FormControl(null),
      'urgencyState': new FormControl(null, Validators.required)
    });

    this.dynamicForm.get('sentStatus').valueChanges.subscribe((value) => {
      if (value == 'Already sent') {
        this.dynamicForm.removeControl('notSentYet');
        this.dynamicForm.addControl('alreadySent', new FormGroup({
          'document': new FormControl(null, Validators.required),
          'sendDate': new FormControl(null, Validators.required),
          'comment': new FormControl(null)
        }));
      } else {
        this.dynamicForm.removeControl('alreadySent');
        this.dynamicForm.addControl('notSentYet', new FormGroup({
          'passportNumber': new FormControl(null, Validators.required)
        }));
      }
    });

    this.dynamicForm.get('urgencyState').valueChanges.subscribe((value) => {
      if (value == 'Urgent') {
        this.dynamicForm.addControl('deadline', new FormControl(null, Validators.required));
      } else {
        this.dynamicForm.removeControl('deadline');
      }
    });
  }

  public onSubmit(form: NgForm): void {
    console.log(form)
  }

  print() {
    console.log(this.dynamicForm)
  }
}
