import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  objectKeys = Object.keys;

  @Input() passportNumber: string = '668941225';
  @Input() avatar: string = 'https://avatars0.githubusercontent.com/u/13931109?s=460&u=0f7c31354a721a5eba4c6dd3a8272abc89206171&v=4';
  @Input() transactions: any[] = [
    {
      currency: 'EUR',
      amount: 250,
      date: new Date(2020, 11, 9)
    },
    {
      currency: 'BGN',
      amount: 300,
      date: new Date(2020, 11, 8)
    },
    {
      currency: 'USD',
      amount: 1250,
      date: new Date(2020, 11, 8)
    },
    {
      currency: 'EUR',
      amount: 20.90,
      date: new Date(2020, 11, 7)
    }
  ];
  @Input() notifications: any = {
    Mail: true,
    Desktop: false,
    SMS: false
  };
  
  @Input() responseEmail: string = "george.dimulski@gmail.com";
  @Input() problemMessage: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus sagittis mi quis aliquet. Curabitur rhoncus iaculis sem, et volutpat diam aliquet id. Nullam at interdum erat. Mauris dictum enim ut facilisis dapibus.";

  constructor() { }

  ngOnInit(): void {
  }
}
