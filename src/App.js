import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddItem from "./AddItem";


/** App: Serves as the main component of the application.
 * Uses data fetching to return data for some specified routes.
 * Renders loading screen and page layouts.
 * Lists exact routes for the application.
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([])
  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getItems();
  }, []);
  /** Loading screen
   * Displays before a page is rendered.
   * Only activates if 'isLoading' variable is true
   */
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            {/* Homepage Route */}
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            {/* Returns a menu of every listed snack */}
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            {/* Returns a specific snack based on the ID */}
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            {/* Returns a menu of every listed drink */}
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            {/* Returns a specific drink based on the ID */}
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            {/* Shows form used to add a new snack */}
            <Route exact path="/add/snack">
              <AddItem type="snack"/>
            </Route>
            {/* Shows form used to add a new drink */}
            <Route exact path="/add/drink">
              <AddItem type="drink"/>
            </Route>
            {/* Route used for invalid links */}
            <Route>
              <p className="invalidRoute">Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
