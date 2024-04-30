import styled from 'styled-components';
import _default from '../../themes/default';

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

export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`

export const CertificateContainer = styled.div`
    display: grid;
    gap: 1rem;
    justify-content: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        align-items: center;
    }
`;

export const StyledDiv = styled.div`
  align-items: center;
  background: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  margin: 1rem;

  &:active,
  &:hover {
    outline: 0;
    background: none;
  }

  span {
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: background 0.3s ease-in-out;
  }

  &:hover span {
    background: rgb(5, 6, 45);
  }

  @media (min-width: 768px) {
    font-size: 24px;
    min-width: 196px;
  }
`;
