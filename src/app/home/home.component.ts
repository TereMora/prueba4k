import { Component, OnInit } from '@angular/core';
import { login } from '../login';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsuariosService]
})
export class HomeComponent implements OnInit {
  loginModel = new login("", "");
  public resultRegistro : any;
  public errorLogin: boolean;
  constructor(private router: Router,
    public usuariosServicios: UsuariosService) {this.usuariosServicios = usuariosServicios; }

  ngOnInit(): void {
  }

  async entrar(){
    console.log('prueba', this.loginModel);
    this.loginModel['deviceId']="5f4a667628b396024d366184";
    await this.usuariosServicios.login(this.loginModel).then((result) => {
        console.log('prueba', result);
        if(result.statusCode == 400){
          this.resultRegistro = result.error;
        }else{
          const payload = {
            token: JSON.stringify(result.id),
          };
          this.router.navigate(['/perfil', payload]);
        }
        
    }).catch((e) => {
          this.errorLogin = true;
          console.log(e);
      });
    
  }


}
