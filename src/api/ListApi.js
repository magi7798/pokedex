import { useState, useEffect } from 'react';
import axios from 'axios';

const ListApi = () => {

  const [fetchData, setFetchData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    console.log('ListApi component mounts');

    setTimeout(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((res) => {
          const { data } = res;
          setFetchData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('list Err: ', err);
          setError(err);
        });
    }, 1500);
  }, []);

  // console.log('ListApi: ', fetchData);
  const results = fetchData.results;

  return { results, loading, error };
};

export default ListApi;