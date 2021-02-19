import React from "react";

function Inventory({inventory}) {
    return <div>
        <h1>My Inventory</h1>
        <ul>
            {inventory.map(inventoryColour => (
                <li key={inventoryColour.colour}>{inventoryColour.quantity} ball(s) of {inventoryColour.colour}</li>)
            )}
        </ul>
    </div>;
}

export default Inventory;