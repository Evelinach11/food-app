export const personalRecipes = [];
console.log(personalRecipes);

export const addPersonalRecipe = (data) => {
  if (validateRecipeData(data)) {
    const id = generateId();
    console.log(`id: ${id}`);
    data.id = id;
    personalRecipes.push(data);
  }
};

export const deletePersonalRecipe = (id) => {
  if (personalRecipes.length > 0) {
    //  TODO delete elem by id
  }
};

export const getPersonalRecipeById = (id) => {
  if (personalRecipes.length > 0) {
    //  TODO get elem by id
  }
};

export const getAllPersonalRecipe = () => {
  if (personalRecipes.length > 0) {
    return personalRecipes;
  }
  return [];
};

const generateId = () => {
  return ++personalRecipes.length;
};

const validateRecipeData = (data) => {
  if (data === undefined || null) {
    return false;
  }
  if (!data.title) {
    return false;
  }
  return true;
};
