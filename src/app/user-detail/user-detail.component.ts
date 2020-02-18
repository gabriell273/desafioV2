import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  editUser: any = [{}];
  inputNameValue: any;
  inputLastNameValue: any;
  inputLoginValue: any;
  inputPasswordValue: any;
  user: any;
  id: number;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private service: UserService) {

  }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.service.get(this.id).subscribe(data => {
          this.user = data;
          this.inputNameValue = this.user.name;
          this.inputLastNameValue = this.user.lastname;
          this.inputLoginValue = this.user.login;
          this.inputPasswordValue = this.user.password;
        });


      })


  }

  deleteUser() {
    this.service.delete(this.id).subscribe(data => {
      console.log(data)
    });
    this.id = undefined;
    this.inputNameValue = undefined;
    this.inputLastNameValue = undefined;
    this.inputLoginValue = undefined;
    this.inputPasswordValue = undefined;
    this.attInfoMessage("#b30000", "Deletado");

  }

  saveUser() {
    if (this.inputNameValue != "" && this.inputLastNameValue != "" &&
      this.inputLoginValue != "" && this.inputPasswordValue != "") {

      this.editUser.id = this.id;
      this.editUser.name = this.inputNameValue;
      this.editUser.lastname = this.inputLastNameValue;
      this.editUser.login = this.inputLoginValue;
      this.editUser.password = this.inputPasswordValue;

      this.service.save(this.editUser).subscribe(data => {
        console.log(data)
      });

      this.attInfoMessage("green", "Editado");
      this.activeEdit();

    } else {
      this.attInfoMessage("red", "Deve-se Preencher Todos os Dados", true);
    }
  }

  attInfoMessage(color, msg, error?) {

    if (!error) {
      document.getElementById("infoMessage").style.opacity = '1';
      document.getElementById("infoMessage").style.color = color;
      document.getElementById("infoMessage").innerHTML = "Usuário " + msg + " Com Sucesso!";

    } else {
      document.getElementById("infoMessage").style.color = color;
      document.getElementById("infoMessage").innerHTML = msg;
    }
  }

  activeEdit() {

    if ((<HTMLInputElement>document.getElementById("inputNameValue")).disabled != false) {
      (<HTMLInputElement>document.getElementById("inputNameValue")).disabled = false;
      (<HTMLInputElement>document.getElementById("inputLastNameValue")).disabled = false;
      (<HTMLInputElement>document.getElementById("inputLoginValue")).disabled = false;
      (<HTMLInputElement>document.getElementById("inputPasswordValue")).disabled = false;
      document.getElementById("btnSave").style.pointerEvents = "auto";
      document.getElementById("btnSave").style.backgroundColor = "#333";

    } else {
      (<HTMLInputElement>document.getElementById("inputNameValue")).disabled = true;
      (<HTMLInputElement>document.getElementById("inputLastNameValue")).disabled = true;
      (<HTMLInputElement>document.getElementById("inputLoginValue")).disabled = true;
      (<HTMLInputElement>document.getElementById("inputPasswordValue")).disabled = true;
      document.getElementById("btnSave").style.pointerEvents = "none";
      document.getElementById("btnSave").style.backgroundColor = "#000";
    }
  }

}
