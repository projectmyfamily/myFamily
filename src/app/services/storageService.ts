
import { Injectable } from "@angular/core";
import { StorageKeys } from './storageKeys';
import { LocalUser } from 'src/model/localUser';


@Injectable()
export class StorageService{ 
    
    getLocalUser(): LocalUser{ 
        let usr = localStorage.getItem(StorageKeys.localUser)
        if(usr == null){ 
            return null
        }else{
            return JSON.parse(usr)
        }
    }

    setLocalUser(obj: LocalUser){ 
        if(obj == null){
            localStorage.removeItem(StorageKeys.localUser)
        }else{
            localStorage.setItem(StorageKeys.localUser, JSON.stringify(obj))
        }

    }

    getLocalMember(){ 
        let usr = localStorage.getItem(StorageKeys.LocalMember)
        if(usr == null){ 
            return null
        }else{
            return JSON.parse(usr)
        }
    }
    setLocalMember(obj: LocalUser){ 
        if(obj == null){
            localStorage.removeItem(StorageKeys.LocalMember)
        }else{
            localStorage.setItem(StorageKeys.LocalMember, JSON.stringify(obj))
        }

    }

    
    
}