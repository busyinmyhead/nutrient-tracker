import React, { useState } from 'react';
import './DietPrediction.css';

const DietPrediction = () => {
    const [dietInfo, setDietInfo] = useState(null);

  
    const predictDiet = () => {
        const gender = prompt("Enter your gender (male/female):");
        const age = parseInt(prompt("Enter your age:"));
        const weight = parseFloat(prompt("Enter your weight in kilograms:"));
        const height = parseFloat(prompt("Enter your height in centimeters:"));
        const activityLevel = prompt(
            "Enter your activity level (sedentary/moderate/active):"
        );

        if (!gender || !age || !weight || !height || !activityLevel) 
        {
            alert("Please enter all the required information.");
            return;
        }

    
        let basalMetabolicRate;
        if (gender === "female") 
        {
            basalMetabolicRate = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
        } 
        else if (gender === "male") 
        {
            basalMetabolicRate = 66 + 13.7 * weight + 5 * height - 6.8 * age;
        } 
        else 
        {
            alert("Invalid gender input. Please enter 'male' or 'female'.");
            return;
        }

        let dailyCaloricNeeds;
        if (activityLevel === "sedentary") 
        {
            dailyCaloricNeeds = basalMetabolicRate * 1.2;
        } 
        else if (activityLevel === "moderate") 
        {
            dailyCaloricNeeds = basalMetabolicRate * 1.55;
        } 
        else if (activityLevel === "active") 
        {
            dailyCaloricNeeds = basalMetabolicRate * 1.9;
        } 
        else 
        {
            alert("Invalid activity level input. Please enter 'sedentary', 'moderate', or 'active'.");
            return;
        }

    
        const proteinRatio = 0.15;
        const fatRatio = 0.3;
        const carbohydrateRatio = 0.55;

        const proteinIntake = dailyCaloricNeeds * proteinRatio / 4; 
        const fatIntake = dailyCaloricNeeds * fatRatio / 9; 
        const carbohydrateIntake = dailyCaloricNeeds * carbohydrateRatio / 4; 

    
        const weeklyProteinIntake = proteinIntake * 7;
        const weeklyFatIntake = fatIntake * 7;
        const weeklyCarbohydrateIntake = carbohydrateIntake * 7;

        const monthlyProteinIntake = proteinIntake * 30;
        const monthlyFatIntake = fatIntake * 30;
        const monthlyCarbohydrateIntake = carbohydrateIntake * 30;


        const dietInfoText = 
        `<div class="diet-section">
            <h3>Suggested Intake</h3>
        </div>
        <br>
        <div class="diet-section">
            <strong>Daily Intake:</strong>
            <div>Calories: ${dailyCaloricNeeds.toFixed(2)}</div>
            <div>Protein: ${proteinIntake.toFixed(2)}g</div>
            <div>Fat: ${fatIntake.toFixed(2)}g</div>
            <div>Carbohydrates: ${carbohydrateIntake.toFixed(2)}g</div>
        </div>
        <br>
        <div class="diet-section">
            <strong>Weekly Intake:</strong>
            <div>Calories: ${(dailyCaloricNeeds * 7).toFixed(2)}</div>
            <div>Protein: ${weeklyProteinIntake.toFixed(2)}g</div>
            <div>Fat: ${weeklyFatIntake.toFixed(2)}g</div>
            <div>Carbohydrates: ${weeklyCarbohydrateIntake.toFixed(2)}g</div>
        </div>
        <br>
        <div class="diet-section">
            <strong>Monthly Intake:</strong>
            <div>Calories: ${(dailyCaloricNeeds * 30).toFixed(2)}</div>
            <div>Protein: ${monthlyProteinIntake.toFixed(2)}g</div>
            <div>Fat: ${monthlyFatIntake.toFixed(2)}g</div>
            <div>Carbohydrates: ${monthlyCarbohydrateIntake.toFixed(2)}g</div>
        </div>`;
        setDietInfo(dietInfoText);
    };
    return (
        <div>
            <h2>Diet Prediction</h2>
            <button class="diet-prediction-button" onClick={predictDiet}>Predict Diet</button>
            {dietInfo && <div className="diet-info" dangerouslySetInnerHTML={{ __html: dietInfo }}></div>}
        </div>
    );
};

export default DietPrediction;
