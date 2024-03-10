export default function FoodCard({ food }) {
    const {id, Name, Price} = food;
    
    return (
        <div className="card food">
            <div className="content" style={{"paddingLeft": '14px'}}>
            <div style={{fontSize:'14px'}}>{Name}</div>
            <div>{Price}</div>
            </div>
            <div className="content">
                <div className="center-div" style={{fontSize:'14px'}}>Nutrition facts:&nbsp;</div>
                <div className="card nutrition">
                {food['Vegan'] === "TRUE" && (<div>Vegan;&nbsp;</div>)}
                {food['Vegetarian'] === "TRUE" && (<div>Vegetarian;&nbsp;</div>)}
                {food['Sustainability'] === "TRUE" && (<div>Sustainability;&nbsp;</div>)}
                {food['Wellness'] === "TRUE" && (<div>Wellness;&nbsp;</div>)}
                </div>
                <div className="card nutrition">
                Contains:&nbsp;
                {food["Contains Soy"] === "TRUE" && (<div>Soy;&nbsp;</div>)}
                {food["Contains Diary"] === "TRUE" && (<div>Diary;&nbsp;</div>)}
                {food["Contains Eggs"] === "TRUE" && (<div>Eggs;&nbsp;</div>)}
                {food["Contains Fish"] === "TRUE" && (<div>Fish;&nbsp;</div>)}
                {food["Contains Gluten"] === "TRUE" && (<div>Gluten;&nbsp;</div>)}
                {food["Contains Peanuts"] === "TRUE" && (<div>Peanuts;&nbsp;</div>)}
                {food["Contains Sesame"] === "TRUE" && (<div>Sesame;&nbsp;</div>)}
                {food["Contains Shell Fish"] === "TRUE" && (<div>Shellfish;&nbsp;</div>)}
                {food["Contains Tree Nuts"] === "TRUE" && (<div>Tree nuts;&nbsp;</div>)}
                {food["Contains Wheat"] === "TRUE" && (<div>Wheat;&nbsp;</div>)}


                </div>
            </div>
        </div>
    );
}
