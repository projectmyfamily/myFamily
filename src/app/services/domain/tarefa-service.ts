import { Injectable } from '@angular/core';
import { TarefaDTO } from 'src/model/tarefaDTO';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api-config';
import { Points } from 'src/model/points';
import { TarefasUpdate } from 'src/model/tarefasUpdate';

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

    updateTarefas(cad: TarefasUpdate, id:String){ 
        return this.http.put(
             `${API_CONFIG.baseUrl}/tarefas/${id}`,
             cad, 
             {
                 observe: 'response',
                 responseType: 'text'
             }
         )
     }
     updatePoints(points: Points, id: string){ 
       return  this.http.put(
             `${API_CONFIG.baseUrl}/membros/points/${id}`,
             points,
             {
                 observe: 'response',
                 responseType: 'text'
             }
         )
     }

}