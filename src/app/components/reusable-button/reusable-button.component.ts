import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.scss']
})
export class ReusableButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public alert(something): void {
    alert(something);
  }

  public printEvent(event) {
    console.log(event);
  }
}
