import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredenciaisDTO } from 'src/model/credenciaisDTO';
import { LocalUser } from 'src/model/localUser';
import { StorageService } from './storageService';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class Auth{ 

    jwtHelper: JwtHelperService= new JwtHelperService();

constructor(
    public http: HttpClient,
    public storage: StorageService

){ 

}

//método principal de login
login(creds: CredenciaisDTO){ 
return this.http.post(
    `${API_CONFIG.baseUrl}/login`, 
    creds,{ 
        observe: 'response',
        responseType: 'text'
    }
)
}


successLogin(authorizationValue: string){ 
    let tok = authorizationValue.substring(7);
    let user: LocalUser = { 
        token:tok,
        email:this.jwtHelper.decodeToken(tok).sub
    }
    this.storage.setLocalUser(user)

}


}