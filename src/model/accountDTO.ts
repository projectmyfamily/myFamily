import { Membro } from './membro';

export interface AccountDTO{
    id: string,
    nome: string,
    email: string
    membros: Membro

}