import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    private name:string;
    private description:string;
    public ingredients:Ingredient[];
    private imagePath:string;

    constructor(name:string,desc:string,imagePath:string,ingredients:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredients=ingredients
    }
}