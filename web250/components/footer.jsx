const Footer = ({imgLoc = ''}) => {
  return <footer>
    <nav>
      <a href="https://github.com/Insignate">Github</a> <hr /> 
      <a href="https://github.com/Insignate/insignate.github.io">Github io</a> <hr />
      <a href="https://www.freecodecamp.org/rsandal">FreeCodeCamp</a> <hr /> 
      <a href="https://www.codecademy.com/profiles/rsandal">Codecademy</a> <hr />
      <a href="https://www.linkedin.com/in/rafael-sandalo-40ba08179/">Linkedin</a> 
    </nav>
    <label>Designed by R.Sandalo © 23 January 2023</label>
    <div>
      <a href={"https://validator.w3.org/check?uri=" + location.href}>
        <img src={imgLoc + "./images/img_validation.html5.png"} alt="Validate Html!" />
      </a>
      <a href={"https://jigsaw.w3.org/css-validator/validator?uri=" + location.href}>
        <img src={imgLoc +"./images/img_validation_css.png"} alt="Validate CSS!" />
      </a>
    </div>
  </footer>
}