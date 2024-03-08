export default function FoodCard({ food }) {
    const {id, Name, nutritionInfo} = food;
    
    return (
        <div className="card food">
            <div className="content">
            <div style={{fontSize:'14px'}}>{Name}</div>
            <div>${nutritionInfo.protein}</div>
            </div>
            <div className="content">
                <div className="center-div" style={{fontSize:'14px'}}>Nutrition facts:</div>
                <div className="card">
                {nutritionInfo.fat > 0.1 && (<div>Contains fat;&nbsp;</div>)}
                {nutritionInfo.contains_soy === "True" && (<div>Contains soy;&nbsp;</div>)}
                {nutritionInfo.vegetarian === "True" && (<div>Vegetarian;&nbsp;</div>)}

                </div>
            </div>
        </div>
    );
}
