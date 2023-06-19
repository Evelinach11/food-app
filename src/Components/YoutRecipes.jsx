import { useState, useEffect } from "react";
import { getBaseImageUrl } from "../data-services/host-service";
import { deleteElementById } from "../utils/array-util";
import {
  addPersonalRecipe,
  getAllPersonalRecipe,
  deletePersonalRecipe,
} from "../data-services/personal-recipe-service";
import axios from "axios";

export const YourRecipes = () => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [showDeleteRecipe, setShowDeleteRecipe] = useState(false);
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [file, setFile] = useState();
  const [currentId, setCurrentId] = useState();
  const [title, setTitle] = useState();
  const [time, setTime] = useState();
  const [allPersonalRecipes, setAllPersonalRecipes] = useState([]);

  const baseImageUrl = getBaseImageUrl();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", file);

    const postImageUrl = `${baseImageUrl}/user/upload`;

    axios
      .post(postImageUrl, formData)
      .then((response) => {
        console.log("Image success");

        const data = {
          pathToPhoto: `/user/photos/${response.data}`,
          title: title,
          time: time,
        };

        //add recipe data to array
        updatePersonalRecipe(data);
      })
      .catch((err) => {
        console.log(err, "err");
      })
      .finally(() => {
        console.log("close");
        closePopupAddYourRecipe();
      });
  };

  const updatePersonalRecipe = (data) => {
    addPersonalRecipe(data);
    setAllPersonalRecipes(getAllPersonalRecipe());
  };

  const deleteRecipe = () => {
    deletePersonalRecipe(currentId);
    setAllPersonalRecipes(deleteElementById(allPersonalRecipes, currentId));
  };

  useEffect(() => {
    setAllPersonalRecipes(getAllPersonalRecipe());
  }, []);

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTimeInputChange = (e) => {
    setTime(e.target.value);
  };

  const openPopupRecipe = () => {
    setShowRecipe(true);
  };
  const closePopupRecipe = () => {
    setShowRecipe(false);
  };

  const openPopupAddYourRecipe = () => {
    setShowAddRecipe(true);
  };
  const closePopupAddYourRecipe = () => {
    setShowAddRecipe(false);
  };
  const openPopupDeleteYourRecipe = (id) => {
    setCurrentId(id);
    setShowDeleteRecipe(true);
  };
  const closePopupDeleteYourRecipe = () => {
    setShowDeleteRecipe(false);
  };

  return (
    <div>
      <div>
        {showRecipe === false ? (
          <div>
            {allPersonalRecipes.length > 0 ? (
              allPersonalRecipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                  <h2 className="recipe__title">
                    {recipe.title}

                    <img
                      onClick={() => {
                        console.log(recipe);
                        openPopupDeleteYourRecipe(recipe.id);
                      }}
                      src="../images/delete.png"
                    />
                  </h2>
                  <img
                    onClick={openPopupRecipe}
                    className="recipe__img"
                    src={`${baseImageUrl}${recipe.pathToPhoto}`}
                    alt={recipe.title}
                  />
                  <p className="recipe__time">{recipe.time}</p>
                </div>
              ))
            ) : (
              <p>У вас немає рецептів</p>
            )}
            <button
              className="recipe__button--add"
              onClick={openPopupAddYourRecipe}
            >
              Додати свій рецепт
            </button>
          </div>
        ) : (
          showRecipe && (
            <div>
              <div>
                <img />
                <div className="recipe__ingredients">
                  <input className="recipe__checkbox" type="checkbox" />
                  <p className="recipe__ingredient"></p>
                </div>

                <button className="recipe__button--start">
                  Почати готувати
                </button>
                <button
                  className="recipe__button--start"
                  onClick={closePopupRecipe}
                >
                  Закрити
                </button>
              </div>
            </div>
          )
        )}
      </div>
      {showAddRecipe && (
        <div className="your__recipes--popup">
          <div>
            <form onSubmit={handleSubmit}>
              <input
                className="images-input"
                type="file"
                onChange={handleFileInputChange}
              />
              <input
                className="title-input"
                type="text"
                onChange={handleTitleInputChange}
              />
              <input
                className="time-input"
                type="text"
                onChange={handleTimeInputChange}
              />
              <button className="btn" type="submit">
                Додати рецепт
              </button>
            </form>
            <button
              className="recipe__button--start"
              onClick={closePopupAddYourRecipe}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
      {showDeleteRecipe && (
        <div>
          <div className="your__recipes--popup">
            <h2>Ви дійсно хочете видалити цей рецепт?</h2>
            <button onClick={deleteRecipe}>Так</button>
            <button onClick={closePopupDeleteYourRecipe}>Закрити</button>
          </div>
        </div>
      )}
    </div>
  );
};
