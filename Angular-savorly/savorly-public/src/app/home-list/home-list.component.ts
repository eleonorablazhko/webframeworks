import { Component, OnInit } from '@angular/core';

export class Recipe {
  _id!: string;
  name!: string;
  description!: string;
  ingredients!: string[];
  cookingTime!: string;
  servings!: number;
  instructions!: string[];
}
@Component({
  selector: 'app-home-list',
  standalone: false,

  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
})
export class HomeListComponent implements OnInit {
  constructor() {}
  recipe: Recipe = {
    _id: '671d2fa82d4d6268d6d0319b',
    name: 'Soda Bread',
    description:
      'Classic Irish soda bread with a crunchy crust and soft inside, great with butter and jam.',
    ingredients: ['flour', 'baking soda', 'salt', 'buttermilk'],
    cookingTime: '40 minutes',
    servings: 8,
    instructions: [
      'Preheat the oven to 425°F (220°C)',
      'In a large bowl, mix together the flour, baking soda, and salt',
      'Make a well in the center and pour in the buttermilk. Mix until a dough forms',
      'Turn the dough out onto a floured surface and knead lightly. Shape into a round loaf',
      'Place the loaf on a baking sheet, and cut a deep cross on top',
      'Bake for about 30-40 minutes, or until the bread is golden and sounds hollow when tapped on the bottom',
      'Let it cool before slicing and serve with butter or jam',
    ],
  };
  ngOnInit() {}
}
