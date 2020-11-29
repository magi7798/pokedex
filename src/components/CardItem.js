import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Card, CardImg, CardName } from './style/CardStyle';
import Loading from '../components/Loading';

const CardItem = (props) => {

  const { name, url } = props;
  // console.log('CardItem-URL: ', url);
  const [fetch, setfetch] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    // console.log('CardItem-URL: ', url);
    setTimeout(() => {
      // console.log('CardItem-URL: ', url);
      axios.get(`${url}`)
        .then((response) => {
          const { data } = response;
          // console.log(data);
          setfetch(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('Card Error: ', err);
          setLoading(false);
          setError(err);
        });

    }, 1500);

  }, []); 

  return (
    <Card>
      {loading && <Loading />}
      {!loading && error && (
        <p className="lead text-center">{error}</p>
      )}
      {!loading && !error && fetch && 
      // <img src={fetch.sprites.front_default} className="card-img-top text-center" alt={name} style={{ width: '160px', height: '160px',  }} />
      <CardImg src={fetch.sprites.front_default} />
      }
      {/* <div className="card-body" style={{padding: '0px'}}> */}
      <CardName>
        <h5 className="card-title">{name.toUpperCase()}</h5>
      </CardName>        
      {/* </div> */}
    </Card>
    // </div>
  );
};

CardItem.prototype = {
  name: PropTypes.string,
  url: PropTypes.string,
};

CardItem.defaultProps = {
  name: '',
  url: '',
}

export default CardItem;