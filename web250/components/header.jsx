const pages = {
  home: 1,
  introduction: 2,
  contract: 3,
  mybrand: 4,
  assignment: 5
}

const Header = ({setPage}) => {
  
  return <header>
    <h2>WEB250 | Rafael Sandalo's Radiant Seahorse</h2>
    <div>
      <button onClick={() => setPage(pages.home)}>Home</button>
      <button onClick={() => setPage(pages.introduction)}>Introduction</button>
      <button onClick={() => setPage(pages.contract)}>Contract</button>
      <button onClick={() => setPage(pages.mybrand)}>My Own Brand</button>
      <button><a href={location.href + 'assignment/'}>Assignment</a></button>
    </div>
    
  </header>
}


