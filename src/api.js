import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID _9-rHZldg7wQjl4Kq435QoKQVT9dmRUzsDSOyKw6zO8'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;