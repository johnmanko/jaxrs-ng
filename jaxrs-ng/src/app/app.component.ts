import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jaxrs-ng';

  constructor(
    private route: ActivatedRoute,
    private router: Router

) { }

  public toHello() {
    return this.router.navigate(['/say-hello']);
  }

  public toCompute() {
    return this.router.navigate(['/compute']);
  }

}
