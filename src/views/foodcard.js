export default function FoodCard({ food }) {
    const {id, Name, Price} = food;
    
    return (
        <div className="card food">
            <div className="content">
            <div style={{fontSize:'14px'}}>{Name}</div>
            <div>{Price}</div>
            </div>
            <div className="content">
                <div className="center-div" style={{fontSize:'14px'}}>Nutrition facts:&nbsp;</div>
                <div className="card nutrition">
                {food['Vegan'] === "True" && (<div>Vegan;&nbsp;</div>)}
                {food['Vegetarian'] === "True" && (<div>Vegetarian;&nbsp;</div>)}
                {food['Sustainability'] === "True" && (<div>Sustainability;&nbsp;</div>)}
                {food['Wellness'] === "True" && (<div>Wellness;&nbsp;</div>)}

                </div>
                <div className="card nutrition">
                Contains:&nbsp;
                {food["Contains Soy"] === "True" && (<div>Soy;&nbsp;</div>)}
                {food["Contains Diary"] === "True" && (<div>Diary;&nbsp;</div>)}
                {food["Contains Eggs"] === "True" && (<div>Eggs;&nbsp;</div>)}
                {food["Contains Fish"] === "True" && (<div>Fish;&nbsp;</div>)}
                {food["Contains Gluten"] === "True" && (<div>Gluten;&nbsp;</div>)}
                {food["Contains Peanuts"] === "True" && (<div>Peanuts;&nbsp;</div>)}
                {food["Contains Sesame"] === "True" && (<div>Sesame;&nbsp;</div>)}
                {food["Contains Shell Fish"] === "True" && (<div>Shellfish;&nbsp;</div>)}
                {food["Contains Tree Nuts"] === "True" && (<div>Tree nuts;&nbsp;</div>)}
                {food["Contains Wheat"] === "True" && (<div>Wheat;&nbsp;</div>)}


                </div>
            </div>
        </div>
    );
}
