import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import breakpointsMedia from '../../../themes/utils/breakpointsMedia';

const Box = styled(motion.ul)`    
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  flex-wrap: wrap;
  color: ${(props) => props.theme.secondary.color};
  margin-top: 1rem;
  transition: all 1s ease-in-out forwards;

  ${breakpointsMedia({
    md: css`      
      width: 600px;
      flex-direction: row;      
    `,
  })}

`;

export default Box;
