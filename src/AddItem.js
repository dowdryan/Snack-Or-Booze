import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import SnackOrBoozeApi from "./Api";

/** AddItem: Function used to add a new snack/drink to the existing list
 * type: Parameter used to determine if the item is a snack/drink
 */
function AddItem({ type }) {
    const history = useHistory() // Creates history object 
    // Store form data with useState
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        recipe: "",
        serve: ""})
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))}
    /** Submits info needed to add a new item.
     * Refresh the page to see added item
     */
    const handleSubmit = async(event) => {
        event.preventDefault()
        // Pushes new item into history stack after a successful submission.
        history.push(`/${type.toLowerCase()}s`)
        SnackOrBoozeApi.addItem(formData, type)}
    return (
        <div style={{ color: 'black' }}>
            <h2>Add {type}</h2>
            <Form onSubmit={handleSubmit}>
                {/* Item Name Field */}
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={`Name...`}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                {/* Item Description Field */}
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="text"
                        name="description"
                        id="description"
                        placeholder={`Description...`}
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                {/* Item Recipe Field */}
                <FormGroup>
                    <Label for="recipe">Recipe</Label>
                    <Input
                        type="text"
                        name="recipe"
                        id="recipe"
                        placeholder={`Recipe...`}
                        value={formData.recipe}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                {/* Item Serve Field */}
                <FormGroup>
                    <Label for="serve">Serve</Label>
                    <Input
                        type="text"
                        name="serve"
                        id="serve"
                        placeholder={`How to serve...`}
                        value={formData.serve}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                {/* Submit Button */}
                <Button type="submit" color="primary">
                    Add {type}
                </Button>
            </Form> {/* End of Form */}
        </div>
    )
}

export default AddItem