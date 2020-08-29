import { Component, OnInit } from '@angular/core';
import { UsuariosService, perfil } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public resultLogin: Array<perfil>;
  public errorLogin: boolean;
  public id: string;
  constructor(
    public usuariosServicios: UsuariosService,
    public route: ActivatedRoute,
  ) { 
    this.usuariosServicios = usuariosServicios;
  }

  async ngOnInit(){
    this.id =  JSON.parse(this.route.snapshot.params.id);
    await this.usuariosServicios.perfil(this.id).then((result) => {
      console.log(result);
      this.resultLogin = result;
    }).catch((e) => {
      this.errorLogin = true;
      console.log('loginError ', this.errorLogin);
    });
  }

}
