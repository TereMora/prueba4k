import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }
}

export enum endpoints {
  countries = 'countries',
  clients = 'clients',
  login = 'users/authentication',
  perfil = 'https://apiapp.xpresshosting.com/api/users/profile?access_token=',
}
