import { Link } from 'react-router-dom';
import { Container, CardRow, CardCol } from '../components/style/ContainerStyle';

import ListApi from '../api/ListApi';
import Loading from '../components/Loading';
import CardItem from '../components/CardItem';

const ListPage = () => {

  const { results, loading, error } = ListApi();

  return (
    <div>
      {loading && (<Loading />)}
      {!loading && error && (
        <p className="lead text-center">{error}</p>
      )}
      {!loading && !error && results.length > 0 && (
        <Container>
          <CardRow className='row'>
            {/* <div className="w-80"></div> */}
            {results.map((result, idx) => {
              // console.log(result.url)
              const pokemonId = idx + 1;
              return (
                <Link to={`pokemon/${pokemonId}`} key={result.name}>
                  {/* <div className="col" style={{ padding: '10px'}}> */}
                  <CardCol className='col'>
                    <CardItem name={result.name} url={result.url} />
                  </CardCol>                    
                  {/* </div> */}
                </Link>
              );
            }
            )}
          </CardRow>
        </Container>
      )}
    </div>
  )
};

export default ListPage;