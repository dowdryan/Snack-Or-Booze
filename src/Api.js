import axios from "axios";
const BASE_API_URL = "http://localhost:5000";


class SnackOrBoozeApi {
  // Uses axios to get return data for all existing snacks
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data}
  // Uses axios to get return data for all existing drinks
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`)
    return result.data}
  // Function used to a new item to the backend.
  static async addItem(itemData, type) {
    try {
      const response = await axios.post(`${BASE_API_URL}/${type}s`, itemData);
      return response.data;
    } catch (error) {
      console.error("Error adding item:", error);
      throw error;
    }
  }
}

export default SnackOrBoozeApi;