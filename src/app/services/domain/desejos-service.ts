import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api-config';
import { DesejosDTO } from 'src/model/desejosDTO';

@Injectable()
export class DesejosService{ 


    constructor(
    public http: HttpClient

    ){ 

    }


    insert(cad: DesejosDTO, id){ 
        return this.http.post(
            `${API_CONFIG.baseUrl}/desejos/membros/${id}`, 
            cad, { 
            observe: 'response',
            responseType: 'text'
            }
        )
    }

    delete(id){ 
        return this.http.delete(
            `${API_CONFIG.baseUrl}/desejos/${id}`
        )

    }


  


}