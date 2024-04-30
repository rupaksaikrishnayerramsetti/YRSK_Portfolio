import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

export const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const styledDiv = styled.div`
.skills-container {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
}
`;

export const techDiv = {color: 'white', fontSize: "2.5rem" }

export const StyledCarousel = styled(Carousel)`
  width: 20rem;
  height: 20rem;
  align-items: center;

  .carousel-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform 0.5s ease-in-out;
    transform: translateX(0);
  }

  .carousel-item-active {
    transform: translateX(100%);
  }

  .slideImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .carousel-indicators {
    display: none;
  }

  @media (max-width: 767.98px) {
    width: 15rem;
    height: 15rem;

    .slideImage {
      width: 15rem;
      height: 15rem;
    }
  }

  @media (min-width: 992px) {
    width: 40rem;
    height: 30rem;

    .slideImage {
      width: 40rem;
      height: 27rem;
    }
  }
`;