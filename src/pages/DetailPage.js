import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import DetailApi from '../api/DetailApi';

const DetailPage = () => {

  const { fetchDetails, loading, error } = DetailApi();
  // console.log('details: ', fetchDetails)

  return (
    <div style={{ padding: '40px 0px' }} >
      {loading && (<Loading />)}
      {!loading && error && (
        <div className="text-center">
          <p className="lead">{error}</p>
          <Link to="/" className="btn btn-primary">Go Back</Link>
        </div>
      )}
      {!loading && !error && fetchDetails && (
        <div>
          <div className='row' >
            <div className='col-sm-5'>
              <img src={fetchDetails.sprites.other.dream_world.front_default} className="rounded mx-auto d-block" alt="" style={{ width: '350px', height: '350px' }} />
              <h3 className='text-center my-3'>{fetchDetails.name.toUpperCase()}</h3>
            </div>
            <div className='col-sm-7 px-5 pt-4'>
              {!loading && !error && fetchDetails.stats.length > 0 && (
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">STAT</th>
                      <th scope="col">VALUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchDetails.stats.map((stat, idx) => (
                      <tr key={stat.stat.name}>
                        <th scope="row">{idx+1}</th>
                        <td>{stat.stat.name}</td>
                        <td>{stat.base_stat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

            </div>
          </div>
          <div className='row'>
            <div className='col text-center my-5'>
              <Link to="/" className="btn btn-primary">Go Back to the List</Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DetailPage;