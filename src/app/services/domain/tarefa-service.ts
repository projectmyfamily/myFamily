import { Injectable } from '@angular/core';
import { TarefaDTO } from 'src/model/tarefaDTO';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api-config';

@Injectable()
export class TarefaService{ 


    constructor(
        private http: HttpClient
    ){ 

    }


    insert(cad: TarefaDTO, id){
       return  this.http.post(`${API_CONFIG.baseUrl}/tarefas/membros/${id}`,
        cad, { 
            observe: 'response',
            responseType: 'text'
                }
        )
         

    }

}