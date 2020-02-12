import { Component, OnInit } from '@angular/core';

import * as dialogs from "tns-core-modules/ui/dialogs";
import { Router } from '@angular/router';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    submit(){
        this.router.navigate(['/home'])
    }

}
