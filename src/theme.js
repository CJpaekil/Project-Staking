import {createGlobalStyle} from 'styled-components';
import moon from '../src/assets/images/moon.png';
import sun from '../src/assets/images/sun.png';


export const lightTheme = {
    body: '#fff',
    fontColor: '#fff',
    text:'#000',
    backgroundColor:'#fff',
    backgroundImage: `url(${moon})`,
    borderColor:'#f0f0f0',
    filter: 'invert(0)',
    red:'#e24c4b',
    black: '#000',
    gray: "#F7F7F7"

}
export const darkTheme = {
    body: '#171717',
    fontColor: '#000',
    text:'#fff',
    backgroundColor:'#303030',
    backgroundImage: `url(${sun})`,
    borderColor: '#222',
    filter: 'invert(1)',
    red:'#e24c4b',
    black: '#fff',
    gray: "#454343"
}
export const GlobalStyles = createGlobalStyle`
body{
    background: ${props => props.theme.body};
}
.gray-bg, .gray-bg h1, .gray-bg h2, .gray-bg h3, .gray-bg h4, .gray-bg h5, .gray-bg h6, .gray-bg span, .gray-bg h5 span, .gray-bg h3 span, .gray-bg h4 span{
  background: ${props => props.theme.gray};
  color: ${props => props.theme.black};
  box-shadow: none;
}

#F7CE0E;
.Play-Game ul li::before {
  background: ${props => props.theme.backgroundColor};
}
.download-badge label, .Play-Game ul li, a, .nav-link, .stake-list-sel select, .popup-card-container, .popup-card-container svg, .popup-card-container svg path, .hero-text-box h1, .hero-text-box p, .main-heading-center h2, .cat-left-text h3, .cat-left-text p, .text-block-heading h3, .text-block-heading p, .icon-text-block-cri h4, .icon-text-block-cri p, .number-text-box h4, .number-text-box p, .aud-white-box p, .aud-white-box h5, .next-ele li h3, .trust-line-textbox h2, .trust-line-textbox p, .review-box h5, .text-block-heading h5, .sm-text h5, .sm-text p, .ft-nav li, .ft-nav li a, .heading-text-stake h2, .fliter-box h5 b, .fliter-box h5, .heading-text-stake p, .text-person h3, .accordion-button.collapsed, .dots svg {
    color: ${props => props.theme.text};
    fill: ${props => props.theme.text};
  }
  div.navbar-collapse, header,.form-field .dropdown-body, .popup-card-container, .navbar-expand-lg .navbar-nav .nav-item .sub-menu, .text-person, .icon-text-block-cri, .step-tabs-box nav .nav-tabs .nav-link.active, .aud-white-box, .review-box, .s-inline-box, .s-icon-box, .moon-icon, .accordion-button.collapsed{
    background-color: ${props => props.theme.backgroundColor};
    border-color: ${props => props.theme.backgroundColor};
  }
  .moon-icon{
    background-image: ${props => props.theme.backgroundImage};
    background-repeat: no-repeat;
    background-position: center;
  }
  .s-box h3, .s-box h5, .s-box i{
    color: ${props => props.theme.fontColor};
  }
  .navbar-expand-lg .navbar-nav .nav-item .sub-menu li a {
    border-color: ${props => props.theme.borderColor};
  }

  .navbar-expand-lg .navbar-nav .has-submenu > a::after {
    filter: ${props => props.theme.filter};
  }

  .navbar-expand-lg .navbar-nav .has-submenu::after {
    border-top-color: ${props => props.theme.backgroundColor};
  }
  .form-field .dropdown .dropdown-header {
    color: ${props => props.theme.text};
  }
  .form-field .dropdown-body .dropdown-item:hover,
  .form-field .dropdown-body .dropdown-item {
    color: ${props => props.theme.text};
  }

  .fliter-box h5 b.red {
    color: ${props => props.theme.red};
  }
  
`