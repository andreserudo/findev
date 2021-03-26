import styled from 'styled-components';

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme.primary.color};    
    font-weight: bold;
    margin-left: .5rem;
  }

  select {
    width: 100px;    
    color: ${(props) => props.theme.secondary.color};    
    font-weight: bold;
    margin-left: .5rem;
  }

  input {
    width: 60px;
    margin-left: .5rem;
  }

`;

export default SelectWrap;
