import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailApi = () => {

  // console.log(useParams());
  const { pokemonId } = useParams();
  // console.log(pokemonId);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [fetchDetails, setFetchDetails] = useState(undefined);

  useEffect(() => {
    console.log('DetailApi component mounts');

    setTimeout(() => {

      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) => {
          const { data } = response;
          // console.log(data);
          setFetchDetails(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('Detail Api Error: ', err);
          setLoading(false);
          setError(err);
        });

    }, 1500);

  }, []);

  // console.log('fetchDetials: ', fetchDetails);

  return { fetchDetails, loading, error };
};

export default DetailApi;
