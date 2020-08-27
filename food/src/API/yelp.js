import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer MZsV-DHr1QBdgqlHr8r9CJhXYgVuNmCdBUCNndN5FQe-9d53J_gBMck8Dueck2bdf6pCpt8f5kvanVn5Ol1qsMWNpVUpAd2f7d1GUPj-7oNnjX0wG4SZQW5rHIkaX3Yx'
    }
});