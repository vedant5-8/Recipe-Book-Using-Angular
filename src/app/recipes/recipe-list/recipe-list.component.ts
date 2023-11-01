import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Vada Pav', 
      'Vada Pav is a savory and spicy soft dinner rolls or fluffy buns, referred to as Pav, stuffed with a fried batter coated potato dumpling fritter called Batata Vada and laced with spicy and sweet chutneys.', 
      'https://i1.wp.com/b.zmtcdn.com/data/pictures/0/13280/fff76391d8dfbdfcfb7bbad4b2007fb6.jpg?ssl=1'),
    new Recipe(
      'Misal Pav', 
      'Misal pav is a popular Maharashtrian street food of usal (sprouts curry) topped with onions, tomatoes, farsan (fried savory mixture), lemon juice, coriander leaves and served with a side of soft pav (Indian dinner rolls). The sprouts curry is made from moth bean sprouts.', 
      'https://recipes.timesofindia.com/photo/62483596.cms?imgsize=3639005')
  ];
  
  constructor() {}
  
  ngOnInit() {
    
  }

}
