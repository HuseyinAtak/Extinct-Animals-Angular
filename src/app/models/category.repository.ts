import { Category } from "./category";

export class CategoryRepository{
    private categories : Category[];
    constructor(){
        this.categories=[
    {id:1,name:"Land Animals"},
    {id:2, name:"Sea Animals"},
    {id:3, name:"Flying Animals"}   ]
    }
    getCategories():Category[]{
        return this.categories;
    }
}