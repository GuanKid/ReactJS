import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './firebase/firebase';
import './App.css'

function AddRecipe({ currentUser }) {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState([{ quantity: '', ingredient: '' }]);
    const [methods, setMethods] = useState([{ description: '' }]);
    const navigate = useNavigate();

    const handleAddRecipe = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(firestore, 'recipes'), {
                title,
                ingredients,
                methods,
                createdBy: currentUser.displayName || currentUser.email,// You can replace this with actual user info
            });
            navigate('/home');
        } catch (error) {
            console.error('Error adding recipe: ', error);
        }
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { quantity: '', ingredient: '' }]);
    };

    const handleAddMethod = () => {
        setMethods([...methods, { description: '' }]);
    };

    return (
        <div id='app'>
            <button className="back-button" onClick={() => navigate('/')}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <div id="recipe-details" className="recipe">
                <h1>Add New Recipe</h1>
                <form onSubmit={handleAddRecipe}>
                    <label>
                        <div className='submitBtn'><input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required /></div>

                    </label>
                    <div>
                        <h3>Ingredients</h3>
                        {ingredients.map((ing, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    placeholder="Ingredient"
                                    value={ing.ingredient}
                                    onChange={(e) => {
                                        const newIngredients = [...ingredients];
                                        newIngredients[index].ingredient = e.target.value;
                                        setIngredients(newIngredients);
                                    }}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Quantity"
                                    value={ing.quantity}
                                    onChange={(e) => {
                                        const newIngredients = [...ingredients];
                                        newIngredients[index].quantity = e.target.value;
                                        setIngredients(newIngredients);
                                    }}
                                    required
                                />
                            </div>
                        ))}
                        <button className="add-recipe-button" type="button" onClick={handleAddIngredient}><i className="fas fa-plus"></i></button>
                    </div>
                    <div>
                        <h3>Methods</h3>
                        {methods.map((method, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    placeholder="Description"
                                    value={method.description}
                                    onChange={(e) => {
                                        const newMethods = [...methods];
                                        newMethods[index].description = e.target.value;
                                        setMethods(newMethods);
                                    }}
                                    required
                                />

                            </div>
                        ))}
                        <button className="add-recipe-button" type="button" onClick={handleAddMethod}><i className="fas fa-plus"></i></button>
                    </div>
                    <div className='submitBtn'>
                        <button className='add' type="submit">Add</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AddRecipe;
