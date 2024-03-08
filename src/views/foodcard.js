export default function FoodCard({ food }) {
    const {id, Name, Price} = food;
    
    return (
        <div className="card food">
            <div className="content">
            <div style={{fontSize:'14px'}}>{Name}</div>
            <div>{Price}</div>
            </div>
            <div className="content">
                <div className="center-div" style={{fontSize:'14px'}}>Nutrition facts:</div>
                <div className="card">
                {food['Vegan'] === "True" && (<div>Vegan;&nbsp;</div>)}

                </div>
                <div className="card">
                {food["Contains Soy"] === "True" && (<div>Contains Soy;&nbsp;</div>)}

                </div>
            </div>
        </div>
    );
}
