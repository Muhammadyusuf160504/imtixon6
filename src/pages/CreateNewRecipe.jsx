import { useState } from "react";
import { Navigate } from "react-router-dom";
// import { collection, doc, addDoc, setDoc } from "firebase/firestore";
// import { db } from "../firebase/FirebaseConfig";
import { useGlobalContext } from "../hooks/useGlobalContext";

function CreateNewRecipe() {
  const { user } = useGlobalContext();
  const userId = user.uid;

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

    if ((title, cookingTime, images, ingredient, method, userId)) {
      const data = {
        title: title,
        cookingTime: cookingTime,
        images: images,
        ingregients: ingredients,
        method: method,
        userid: userId,
      };
      console.log(data);
      setTitle("");
      setCookingTime("");
      setImages("");
      setIngredients("");
      setMethod("");
      return <Navigate to="/" />;
    } else {
      alert("Malumotlar Yetarli emas !");
    }
    // await addDoc(collection(db, "create-foot"), { ...data });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl text-slate-900 pb-14">Create New Recipe</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="flex flex-col gap-4">
          <span>Title:</span>
          <input
            type="text"
            placeholder="Type Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="input input-bordered input-md w-full max-w-xs"
          />
        </label>
        <label className="flex flex-col gap-4">
          <span>Ingredients:</span>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Type Ingredients"
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
              className="input input-bordered input-md w-full max-w-xs"
            />
            <button
              className="btn btn-primary"
              onClick={addIngredient}
              type="submit"
            >
              Add
            </button>
          </div>
          <div className="flex gap-2">
            <p className="text-lg">Ingredienst:</p>
            <div className="flex mb-3">
              {ingredients.length ? (
                ingredients.map((ingredient, index, arr) => {
                  return (
                    <p className="text-lg text-red-500" key={ingredient}>
                      {ingredient}
                      {index === arr.length - 1 ? "." : ","}
                    </p>
                  );
                })
              ) : (
                <div>No ingredients:(</div>
              )}
            </div>
          </div>
        </label>
        <label className="flex flex-col gap-4">
          <span>Cooking Time:</span>
          <input
            type="number"
            placeholder="Type Minutes"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            className="input input-bordered input-md w-full max-w-xs"
          />
        </label>
        <label className="flex flex-col gap-4 mt-4">
          <span>Images URL:</span>
          <div className="flex gap-3">
            <input
              type="url"
              placeholder="Past URL"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              className="input input-bordered input-md w-full max-w-xs"
            />
            <button
              className="btn btn-primary"
              onClick={addImage}
              type="submit"
            >
              Add
            </button>
          </div>
          <div>
            <p className="text-lg">Image</p>
            <div className="flex justify-between p-2">
              {images.length ? (
                images.map((image) => {
                  return <img key={image} src={image} alt="image" width={70} />;
                })
              ) : (
                <div>No Image:(</div>
              )}
            </div>
          </div>
        </label>
        <label className="flex flex-col gap-4">
          <span>Method:</span>
          <textarea
            placeholder="Type Method"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          ></textarea>
        </label>
        <div className="flex justify-between mt-5">
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
