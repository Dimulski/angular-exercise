import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() firstName: string = 'George';
  @Input() lastName: string = 'Dimulski';
  @Input() todos: string[] = [
    'Create dynamic form',
    'Create reusable button',
    'Add tests',
    'Study for math exam'
  ];
  @Input() suggestions: any[] = [
    {
      image: "https://blog.flolive.net/hubfs/Welcome%20to%20the%20era.jpg",
      title: "Welcome to the era of software-defined IoT connectivity",
      link: "https://blog.flolive.net/welcome-to-the-era-of-software-defined-iot-connectivity"
    },
    {
      image: "https://blog.flolive.net/hubfs/Stop%20talking%20BSS.jpg",
      title: "Stop talking BSS with limited legacy technology, and make it happen with cloud BSS built for IoT",
      link: "https://blog.flolive.net/stop-talking-bss-with-limited-legacy-technology-and-make-it-happen-with-cloud-bss-built-for-iot"
    },
    {
      image: "https://blog.flolive.net/hubfs/Market%20trends%20for.jpg",
      title: "Why Do Enterprises Need a Private Core Network?",
      link: "https://blog.flolive.net/market-trends-for-mobile-private-networks-why-do-enterprises-need-a-private-core-network"
    }
  ];
  @Input() phone: string = "+359 898 671 501"
  @Input() email: string = "george.dimulski@gmail.com"

  constructor() { }

  ngOnInit(): void {
  }

}
