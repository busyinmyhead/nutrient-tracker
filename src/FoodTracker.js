import React, { useState } from 'react';
import './FoodTracker.css';
import foodData from './fooddata.json'; // Import the dataset file

const FoodTracker = () => {
    const [foods, setFoods] = useState([]);
    const [dailyIntake, setDailyIntake] = useState({
        calories: 0,
        fats: 0,
        carbohydrates: 0,
        proteins: 0,
    });

    const addFood = (food) => {
        const updatedFoods = [...foods, food];
        const updatedIntake = calculateIntake(updatedFoods);
        setFoods(updatedFoods);
        setDailyIntake(updatedIntake);
    };

    const removeFood = (foodIndex) => {
        const updatedFoods = [...foods];
        updatedFoods.splice(foodIndex, 1);
        const updatedIntake = calculateIntake(updatedFoods);
        setFoods(updatedFoods);
        setDailyIntake(updatedIntake);
    };

    const calculateIntake = (foods) => {
        let totalCalories = 0;
        let totalFats = 0;
        let totalCarbohydrates = 0;
        let totalProteins = 0;
  
        foods.forEach((food) => {
            const foodItem = foodData.find((item) => item.Food === food.Food);
            if (foodItem) {
                totalCalories += parseFloat(foodItem.Calories) || 0;
                totalFats += parseFloat(foodItem.Fat) || 0;
                totalCarbohydrates += parseFloat(foodItem.Carbs) || 0;
                totalProteins += parseFloat(foodItem.Protein) || 0;
            } 
            else {
                totalCalories += parseFloat(food.calories) || 0;
                totalFats += parseFloat(food.fats) || 0;
                totalCarbohydrates += parseFloat(food.carbohydrates) || 0;
                totalProteins += parseFloat(food.proteins) || 0;
            }
        });
  
        return {
            calories: totalCalories.toFixed(1),
            fats: totalFats.toFixed(1),
            carbohydrates: totalCarbohydrates.toFixed(1),
            proteins: totalProteins.toFixed(1),
        };
    };
  
  
    const handleFoodInputChange = (e) => {
        const { name, value } = e.target;
        setFoodInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleAddFood = () => {
        const food = {
            Food: foodInput.foodName,
            calories: parseFloat(foodInput.calories),
            fats: parseFloat(foodInput.fats),
            carbohydrates: parseFloat(foodInput.carbohydrates),
            proteins: parseFloat(foodInput.proteins),
        };

        addFood(food);
        setFoodInput({
        foodName: '',
        calories: '',
        fats: '',
        carbohydrates: '',
        proteins: '',
        });
    };

    const [foodInput, setFoodInput] = useState({
        foodName: '',
        calories: '',
        fats: '',
        carbohydrates: '',
        proteins: '',
    });

    return (
        <div className="food-tracker-container">
            <h1 className="food-tracker-header">Food Tracker</h1>
            <div className="food-selection">
                <h2>Add Food</h2>
                <select onChange={(e) => addFood(foodData[e.target.value])}>
                    <option>Select a food</option>
                    {foodData.map((food, index) => (
                       <option key={index} value={index}>
                            {food.Food}
                        </option>
                    ))}
                </select>
                <input type="text" name="foodName" value={foodInput.foodName} onChange={handleFoodInputChange} placeholder="Food Name"/>
        
                <input type="number" name="calories" value={foodInput.calories} onChange={handleFoodInputChange} placeholder="Calories"/>
        
                <input type="number" name="fats" value={foodInput.fats} onChange={handleFoodInputChange} placeholder="Fats" />
        
                <input type="number" name="carbohydrates" value={foodInput.carbohydrates} onChange={handleFoodInputChange} placeholder="Carbohydrates"/>
        
                <input type="number" name="proteins" value={foodInput.proteins} onChange={handleFoodInputChange} placeholder="Proteins"/>
        
                <button onClick={handleAddFood}>Add Food</button>
            </div>

            <div className="food-list">
                <h2>Food Intake</h2>
                <ul>
                    {foods.map((food, index) => (
                        <li className="food-item" key={index}>
                            {food.Food} - {food.calories} calories
                            <button onClick={() => removeFood(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="daily-intake">
                <h3>Daily Intake</h3>
                <p>Calories: {dailyIntake.calories}</p>
                <p>Fats: {dailyIntake.fats}g</p>
                <p>Carbohydrates: {dailyIntake.carbohydrates}g</p>
                <p>Proteins: {dailyIntake.proteins}g</p>
            </div>
        </div>
    );
};

export default FoodTracker;
