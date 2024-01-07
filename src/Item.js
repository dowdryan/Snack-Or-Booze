import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";


/** Item: Function used to return data on a specific snack/drink
 * Params: (items, cantFind)
  * items: Determines whether to search for snack/drink
  * cantFind: Holds string used to redirect to the specified page.
 */
function Item({ items, cantFind }) {
  const { id } = useParams(); // Extracts param from URL
  let item = items.find(item => item.id === id); // Searches for item based off the id.
  // Redirects to snacks/drinks page if the ID is invalid.
  if (!item) return <Redirect to={cantFind} />;
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {/* Displays item name */}
            {item.name}
          </CardTitle>
          {/* Displays item description */}
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            {/* Displays item recipe */}
            <b>Recipe:</b> {item.recipe} 
          </p>
          <p>
            {/* Displays how to serve item */}
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
