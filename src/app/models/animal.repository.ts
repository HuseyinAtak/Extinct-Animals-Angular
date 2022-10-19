import { Animals } from "./animal";

export class AnimalsRepository {
    private animals : Animals[];
    constructor(){
        this.animals = [
    {id:1,title:"1. Animals",description:"First Animals Description."},
    {id:2,title:"2. Animals",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam reiciendis accusamus! Illum sit deleniti laudantium placeat blanditiis doloremque hic, enim molestiae, perspiciatis dignissimos id excepturi, voluptate numquam quam officiis."},
    {id:3,title:"3. Animals",description:"ThirLorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam reiciendis accusamus! Illum sit deleniti laudantium placeat blanditiis doloremque hic, enim molestiae, perspiciatis dignissimos id excepturi, voluptate numquam quam officiis.tion."},
    {id:4,title:"4. Animals",description:"FourtLorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam reiciendis accusamus! Illum sit deleniti laudantium placeat blanditiis doloremque hic, enim molestiae, perspiciatis dignissimos id excepturi, voluptate numquam quam officiis.tion."},
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