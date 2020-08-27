import React, { useState, useEffect } from 'react';
import yelp from '../API/yelp';


export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchAPI = async (searchTerm) => {
        try {
      const response = await  yelp.get('/search', {
          params: {
              limit: 50,
              term: searchTerm,
              location: 'san jose'
          }
      });
      setResult(response.data.businesses);
    } catch(err){
        setErrorMessage('Something Went Wrong');
    }
    }
    
    useEffect(() => {
        searchAPI('drink');
    }, []);

    return [searchAPI, result, errorMessage];
}