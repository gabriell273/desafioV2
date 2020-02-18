import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  saveUser: any = [];
  inputNameValue: any;
  inputLastNameValue: any;
  inputLoginValue: any;
  inputPasswordValue: any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  createUser() {
    if (this.inputNameValue != undefined && this.inputLastNameValue != undefined &&
      this.inputLoginValue != undefined && this.inputPasswordValue != undefined) {

      this.saveUser.name = this.inputNameValue;
      this.saveUser.lastname = this.inputLastNameValue;
      this.saveUser.login = this.inputLoginValue;
      this.saveUser.password = this.inputPasswordValue;
     
      this.service.save(this.saveUser).subscribe(data => {
        console.log(data)
        console.log(this.saveUser)
      });

      document.getElementById("infoMessage").style.color = "green";
      document.getElementById("infoMessage").innerHTML = "Usuário Salvo Com Sucesso!";
      this.clearInput();

    } else {

      document.getElementById("infoMessage").style.color = "#b30000";
      document.getElementById("infoMessage").innerHTML = "Deve-se Preencher Todos os Dados";
    }
  }

  clearInput() {
    this.inputNameValue = undefined;
    this.inputLastNameValue = undefined;
    this.inputLoginValue = undefined;
    this.inputPasswordValue = undefined;
  }

}
