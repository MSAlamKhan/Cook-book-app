class Meal {
  constructor(
    id,
    categoryID,
    title,
    affordablity,
    complexity,
    imageURL,
    duration,
    ingerdients,
    steps,
    isGultenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  ) {
    this.id = id,
    this.categoryID = categoryID,
    this.title = title,
    this.affordablity = affordablity,
    this.complexity = complexity,
    this.imageURL = imageURL,
    this.duration = duration,
    this.ingerdients = ingerdients,
    this.steps = steps,
    this.isGultenFree = isGultenFree,
    this.isVegan = isVegan,
    this.isVegetarian = isVegetarian,
    this.isLactoseFree = isLactoseFree
  }
}
export default Meal;