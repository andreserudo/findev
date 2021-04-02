import { motion } from 'framer-motion';
import styled from 'styled-components';

const ListCard = styled(motion.li)`
  list-style: none;
  margin: 0;
  padding: 0;  

  margin-bottom: 20px;
  margin-right: 1rem;
  background-color: white;
  cursor: pointer;
  /* transition: box-shadow 1s linear;

  &:hover {
    box-shadow: 1px 1px 3px -1px black;
    -webkit-box-shadow: 1px 1px 3px -1px black;
    -moz-box-shadow: 1px 1px 3px -1px black;    
    transition: box-shadow 1s linear;
  }    */
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 1rem;  
`;

Card.Content = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;

  &:first-of-type{
    margin-bottom: .5rem;
  }

  img {
    margin-right: .5rem;
  }
`;

export { ListCard, Card };
