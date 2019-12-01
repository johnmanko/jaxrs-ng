import { Component, OnInit, Input, Output } from '@angular/core';
import { HelloService} from '@services/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(private helloService: HelloService) { }

  public name: string;
  public greeting: string;

  ngOnInit() {
  }

  sayHello() {
    this.helloService.sayHello(this.name).subscribe((data: any) => {
      this.greeting = data;
    });
  }


}
