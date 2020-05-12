import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api-config';
import { Membro } from 'src/model/membro';
import { AccountDTO } from 'src/model/accountDTO';
import { Observable } from 'rxjs';
import { StorageService } from '../storageService';

@Injectable()
export class Cadastro{ 


    constructor(
        public http: HttpClient,
        public storage: StorageService
    ){ 

    }


    cadastrar(cad: Cadastro){ 
        return this.http.post(
            `${API_CONFIG.baseUrl}/account`, 
            cad, { 
        observe: 'response',
        responseType: 'text'
            }
        )
    }

    cadastrarMembro(cad: Membro, id: string){ 
        return this.http.post(
            `${API_CONFIG.baseUrl}/membros/account/${id}`, 
            cad, { 
        observe: 'response',
        responseType: 'text'
            }
        )
    }


    findByEmail(email: string) : Observable<AccountDTO> {
        // return this.http.get(`${API_CONFIG.baseUrl}/account/email?value=${email}`);
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});
 
        return this.http.get<AccountDTO>(
            `${API_CONFIG.baseUrl}/account/email?value=${email}`,
            {'headers': authHeader});
        
 
     }



}