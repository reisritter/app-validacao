import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  usuario : Usuario = new Usuario();
  msgValidacaoSenha:string=""
  validacao:boolean = false;

  constructor(
    private usuarioService:UsuarioService) 
  { }

  ngOnInit(): void {

    (function () {      
      window.addEventListener('load', e => {       
        var forms = document.getElementsByClassName('needs-validation');
        
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event:any) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();              
            }            
            //form.classList.add('was-validated');            
          }, false);
        });
      }, false);
    })();
  }

  post () {
    this.usuarioService.postValidarSenha(this.usuario).subscribe(
      (response:boolean)=>{
        if(response == true)
        {
          this.validacao = true
          this.msgValidacaoSenha="A senha é válida!"
        }          
        else
        {
          this.validacao = false
          this.msgValidacaoSenha = "Sinto muito! A senha é inválida!"
        } 
      },err=>alert("Erro! Verificar API!"))
  }

}
