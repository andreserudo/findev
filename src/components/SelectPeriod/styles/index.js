import styled from 'styled-components';

const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  span {
    color: ${(props) => props.theme.primary.color};    
    font-weight: bold;    
  }  
`;

SelectWrap.Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;  

  span {
    color: ${(props) => props.theme.primary.color};    
    font-weight: bold;    
    margin-left: .5rem;
  }

  select {
    width: 100px;    
    height: 32px;
    color: ${(props) => props.theme.secondary.color};    
    font-weight: bold;    
    border: none;  
    border-radius: 3px;
  }

  input {
    width: 60px;
    height: 32px;
    margin-left: .5rem;
    border: none;  
    border-radius: 3px;
  }

`;

export default SelectWrap;
