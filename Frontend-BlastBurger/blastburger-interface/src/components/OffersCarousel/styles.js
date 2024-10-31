import styled from 'styled-components'

export const Container = styled.div`
  .carrousel-item {
    padding-right: 40px;
    
    
  }
    overflow-x: hidden;


    .react-multi-carousel-list {
      overflow: visible;
      
    }

  padding-left: 40px;
  padding-bottom: 90px;
    
  
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61a120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 30px;

  &::after {
    content: '';
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: #61a120;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  
  }
`





