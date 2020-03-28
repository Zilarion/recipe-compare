enum IngredientMetric {
  count,
  weight,
  volume,
}

export interface Ingredient {
  name: string;
  amount: number;
  metric: IngredientMetric;
}
