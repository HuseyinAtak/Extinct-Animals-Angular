import { Category } from "./category";

export class CategoryRepository{
    private categories : Category[];
    constructor(){
        this.categories=[
    {id:1, name:"All Animals"},
    {id:2,name:"Land Animals"},
    {id:3, name:"Sea Animals"},
    {id:4, name:"Flying Animals"}   ]
    }
    getCategories():Category[]{
        return this.categories;
    }
}