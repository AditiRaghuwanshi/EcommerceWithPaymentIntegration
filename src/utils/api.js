
import axios from 'axios';

// Assuming this will get your backend URL from environment variables
const params = {
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY, // Make sure the token is correct
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        // Fetch data from the backend using the full URL
        const { data } = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
        return data;
    } catch (error) {
        console.log('API Request Error:', error);
        return null; // Return null in case of an error
    }
};




