export default function FoodCard({ food }) {
    const {id, name, nutritionInfo} = food;
    
    return (
        <div className="card">
            <div className="content">
            <div>{name}</div>
            <div>Calories: {nutritionInfo.calories}</div>
            </div>
        </div>
    );
}
