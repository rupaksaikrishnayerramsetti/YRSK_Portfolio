import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright } from './FooterStyle';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Yerramsetti R Sai Krishna</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Yerramsetti R Sai Krishna. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
