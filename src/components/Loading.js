import styled from 'styled-components';

const Animation = styled.div`
  height: 33%;
  text-align: center;
`;
 
const Loading = () => {
  return (
    <Animation className="my-5">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </Animation>
  );
}

export default Loading;
