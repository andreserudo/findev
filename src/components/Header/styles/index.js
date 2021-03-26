import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../themes/utils/breakpointsMedia';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 600px;

  h1 {
    color: ${(props) => props.theme.primary.color};    
    ${breakpointsMedia({
    xs: css`
          font-size: 40px;
        `,
    sm: css`
          font-size: 48px;
        `,
    md: css`
          font-size: 52px;
        `,
    lg: css`
          font-size: 62px;
        `,
  })}
  }

  h2 {
    color: ${(props) => props.theme.primary.subtitle_color};
    font-size: 12px;
    ${breakpointsMedia({
    sm: css`
          font-size: 14px;
        `,
  })}

  }

`;

export default HeaderWrapper;
