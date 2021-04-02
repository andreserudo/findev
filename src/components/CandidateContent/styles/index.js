import styled from 'styled-components';
import { motion } from 'framer-motion';

const Techs = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  
  p, span:first-of-type ,span + span {
    margin-bottom: .25rem;    
  }

  p {
    transition: all 1s ease;
  }

  span {
    transition: background-color 4s steps(2);
  }
`;

export default Techs;
