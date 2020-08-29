import { Injectable } from '@angular/core';
import { MiddlewareService } from './middleware.service';

export interface countries{
  "country": string,
  "prefix": string,
  "code": string,
  "status": boolean,
  "id": string,
  "createdAt": string,
  "updatedAt": string
}

export interface perfil{
  "wUserId": string,
  "email": string,
  "phone": string,
  "phoneVerified": boolean,
  "role": string,
  "realm": string,
  "status": string,
  "id": string,
  "firstname": string,
  "lastname": string,
  "company": string,
  "address": string,
  "emailpage": string,
  "city": string,
  "state": string,
  "colony": string,
  "postcode": string,
  "phonepage": string,
  "countryId": string,
  "countrypage": string,
  "country": {
    "country": string,
    "prefix": string,
    "code": string,
    "id": string
  }
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(
    private middlewareServ: MiddlewareService,
  ) { }

  public async ciudades() {
    return this.middlewareServ
        .get('countries', false, true)
        .toPromise()
        .then((resp) => {
            return resp;
        });
  }

  public async newUser(datos) {
    return this.middlewareServ
        .post('clients', datos, false, true)
        .toPromise()
        .then((resp) => {
            return resp;
        });
  }

  public async login(datos) {
    return this.middlewareServ
        .post('login', datos, false, true)
        .toPromise()
        .then((resp) => {
          console.log('login response ', resp);
            return resp;
        }).catch((err) => {
          console.error('loginError', err);
          let errorStr: string;
          return err.error;
          
        });
  }

  public async perfil(id) {
    return this.middlewareServ
        .get('perfil'+id, false, true)
        .toPromise()
        .then((resp) => {
            return resp;
        });
  }
}
