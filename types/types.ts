export interface recipe {
    id: number;
    title: string;
    image: string;
    readyInMinutes: string;
    servings: string;
    summary: string;
    dishTypes: string;
    diets: string[];
    spoonacularSourceUrl: string;
    extendedIngredients: Ingredients[];
    analyzedInstructions: InstructionBlock[];
  }
 export interface InstructionStep {
    number: number;
    step: string;
    ingredients: any[];
    equipment: any[];
  }
  
 export interface InstructionBlock {
    name: string;
    steps: InstructionStep[];
  }
  
 export interface Ingredients {
    id: number;
    amount: number;
    unit: string;
    original: string;
    image: string;
  }
  