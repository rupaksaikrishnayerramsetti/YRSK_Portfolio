import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

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
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const CardGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
`

export const CertCard = styled.div`
  width: 300px;
  height: 250px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
      filter: brightness(1.1);
  }
`

export const CertImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.white};
`

export const CertTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  padding: 10px;
  text-align: center;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`