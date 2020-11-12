import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() type: string = 'button';
  @Input() size: string = 'medium';
  @Input() disabled: boolean = false;

  @Output() clicked: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  public emitClicked(event): void {
    this.clicked.emit(event);
  }
}
