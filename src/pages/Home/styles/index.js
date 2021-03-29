import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../themes/utils/breakpointsMedia';

const HomeWrap = styled.div`
  width: 100%;
`;

const UpWrap = styled.div`  
  background-color: ${(props) => props.theme.primary.background};
  padding-top: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  ${breakpointsMedia({
    md: css`
      display: flex;
      flex-direction: column;
      align-items: center;  
    `,
  })}
    
`;

const DownWrap = styled.main`  
  background-color: ${(props) => props.theme.secondary.background};  

`;

DownWrap.Form = styled.section`
  padding: 0 2rem;
  background-color: ${(props) => props.theme.primary.background};

  display: flex;
  align-items: center;
  justify-content: center;
`;

DownWrap.Results = styled.section`
  background-color: ${(props) => props.theme.secondary.background};  
`;

export { HomeWrap, UpWrap, DownWrap };
