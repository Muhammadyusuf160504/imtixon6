import { useState } from "react";
// import { collection, doc, addDoc, setDoc } from "firebase/firestore";
// import { db } from "../firebase/FirebaseConfig";
// import { useGlobalContext } from "../hooks/useGlobalContext";

function CreateNewRecipe({ userId }) {
  // const { user } = useGlobalContext();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);

  const addIngredient = (e) => {
    e.preventDefault();
    if (ingredient.trim()) {
      if (!ingredients.includes(ingredient)) {
        setIngredients((prev) => {
          return [...prev, ingredient];
        });
        setIngredient("");
      } else {
        alert("Is was already added !");
      }
    } else {
      alert("Please, write something !");
    }
  };
  const addImage = (e) => {
    e.preventDefault();
    const imageChecked = /(https?:\/\/.*\.(?:png|jpg))/;
    if (image.trim()) {
      if (!images.includes(image) && imageChecked.test(image.trim())) {
        setImages((prev) => {
          return [...prev, image];
        });
        setImage("");
      } else if (images.includes(image)) {
        alert("Is was already added !");
        setImage("");
      } else {
        alert("Please, write something !");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      cookingTime: cookingTime,
      images: images,
      ingregients: ingredients,
      method: method,
      userid: userId,
    };
    console.log(data);
    // await addDoc(collection(db, "create-foot"), { ...data });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl text-slate-900 pb-14">Create New Recipe</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="">
          <span>Title:</span>
          <input
            type="text"
            placeholder="Type Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="input input-bordered input-md w-full max-w-xs"
          />
        </label>
        <label>
          <span>Ingredients:</span>
          <div>
            <input
              type="text"
              placeholder="Type Ingredients"
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
              className="input input-bordered input-md w-full max-w-xs"
            />
            <button onClick={addIngredient} type="submit">
              Add
            </button>
          </div>
          <p>Ingredienst:</p>
          {ingredients.length &&
            ingredients.map((ingredient) => {
              return <p key={ingredient}>{ingredient}</p>;
            })}
        </label>
        <label>
          <span>Cooking Time:</span>
          <input
            type="number"
            placeholder="Type Minutes"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            className="input input-bordered input-md w-full max-w-xs"
          />
        </label>
        <label>
          <span>Images URL:</span>
          <div>
            <input
              type="url"
              placeholder="Past URL"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              className="input input-bordered input-md w-full max-w-xs"
            />
            <button onClick={addImage} type="submit">
              Add
            </button>
          </div>
          <div>
            <p>Image</p>
            <div className="flex justify-between">
              {images.length &&
                images.map((image) => {
                  return <img key={image} src={image} alt="image" width={70} />;
                })}
            </div>
          </div>
        </label>
        <label>
          <span>Method:</span>
          <textarea
            placeholder="Type Method"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          ></textarea>
        </label>
        <div className="flex justify-between">
          <button type="submit" className="btn btn-active btn-primary">
            CREATE
          </button>
          <button type="button" className="btn btn-active btn-accent">
            PREVIEW
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewRecipe;
