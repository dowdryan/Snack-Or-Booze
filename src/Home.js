import React , {useState, useEffect} from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import SnackOrBoozeApi from "./Api";


/** Home: Function used to render homepage.
 *  Uses data fetching to return the exact number of snacks/drinks
 */
function Home() {
  const [numSnacks, setNumSnacks] = useState(0) // Stores number of snacks
  const [numDrinks, setNumDrinks] = useState(0) // Stores number of drinks
  useEffect(() => {
    async function fetchData() {
      try {
        const snacks = await SnackOrBoozeApi.getSnacks()
        const drinks = await SnackOrBoozeApi.getDrinks()
        setNumSnacks(snacks.length)
        setNumDrinks(drinks.length)
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }
    fetchData()
  }, [])
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <p>Snacks: {numSnacks}</p> {/* Displays # of snacks */}
            <p>Drinks: {numDrinks}</p> {/* Displays # of drinks */}
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
