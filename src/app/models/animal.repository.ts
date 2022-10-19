import { Animals } from "./animal";

export class AnimalsRepository {
    private animals : Animals[];
    constructor(){
        this.animals = [
    {id:1,title:"1. Animals",description:"First Animals Description."},
    {id:2,title:"2. Animals",description:"Second Animals Description."},
    {id:3,title:"3. Animals",description:"Third Animals Description."},
    {id:4,title:"4. Animals",description:"Fourth Animals Description."},
    {id:5,title:"5. Animals",description:"Fifth Animals Description."}
        ];
    }
    getAnimals(){
        return this.animals;
    }

    getAnimalById(id:number){
        return this.animals.find(i=>i.id==id);
    }

}