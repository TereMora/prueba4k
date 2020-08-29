import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario';
import { UsuariosService, countries } from '../usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UsuariosService]
})
export class RegistroComponent implements OnInit {
  public ciudadesFiltro: any = [];
  public resultRegistro:any;
  public ciudades: Array<countries>;
  public result: Array<countries>;
  public errorCiudades: boolean;
  usuarioModel = new usuario("", "", "", "", "", "", "", "", "", "", "", "");
  constructor(
    private router: Router,
    public usuariosServicios: UsuariosService,
    public route: ActivatedRoute,
  ){
    this.usuariosServicios = usuariosServicios;
  }

  optionsSelect: Array<any>;
  ngOnInit() {
  }
  async formularioEnviado(){
    this.errorCiudades = false;
    await this.usuariosServicios.ciudades().then((ciudades) => {
      console.log(ciudades[0].code);
        this.ciudadesFiltro =  ciudades.filter(ciudad => (ciudad.code == "MX"));
            console.log('ciudades filtro ', this.ciudadesFiltro);
        }).catch((e) => {
            this.errorCiudades = true;
            console.log('ciudadError ', this.errorCiudades);
        });
    this.usuarioModel['countryId'] = this.ciudadesFiltro[0].id;
    this.usuarioModel['billing'] = {};
    console.log("Registro Exitoso ", this.usuarioModel);
    await this.usuariosServicios.newUser(this.usuarioModel).then((result) => {
        this.resultRegistro=result.message;
        const payload = {
          id: JSON.stringify(result.id),
        };
        this.router.navigate(['/perfil', payload]);
        }).catch((e) => {
            this.errorCiudades = true;
            console.log(e);
            this.resultRegistro = e.error.errors;
        });
    
  }
}
