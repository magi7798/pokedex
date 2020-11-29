import styled from 'styled-components';

const Card = styled.div`
  background: #f4f4f4;
  padding: 10px;
  border-radius: 4px;
  border: 3px solid darkcyan;
  height: 220px;
  width: 100%;
  text-align: center;

  &:hover {
    border: 3px solid gold;
  }
`;

const CardImg = styled.img`
  height: 160px;
  width: 100%;
`;

const CardName = styled.div`
  padding: 0px;
  width: 100%;
`;

export {
  Card,
  CardImg,
  CardName
};