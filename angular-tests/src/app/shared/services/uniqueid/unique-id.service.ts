import { Injectable } from "@angular/core";
import { v4 as uuid } from "uuid";


@Injectable()
export class uniqueIdService{
    private numberOfIds = 0;

    public generatedUniqueIdWithPrefix(prefix: string): string{
        if(!prefix){
            throw Error(`Prefix nao pode ser null`)
        }
        const uniqueId = this.generateUnique();
        this.numberOfIds++;
        return `${prefix} - ${uniqueId}`;
    }
    
    public getNumberOfGeneratedUniqueIds():number{
        return this.numberOfIds;
    }

    private generateUnique(): string{
        return uuid();
    }
}