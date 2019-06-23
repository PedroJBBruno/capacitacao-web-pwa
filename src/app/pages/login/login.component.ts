import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loading: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public goToTaskEditor(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/tasks']);
    }, 1000);
  }
}
