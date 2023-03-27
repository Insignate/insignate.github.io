const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

const pages = {
  home: 1,
  introduction: 2,
  contract: 3,
  mybrand: 4,
  assignment: 5
}

const App = () => {
  const [page, setPage] = React.useState(pages.home)
  return <React.Fragment>
    <Header setPage={setPage} />
    {
      page === pages.home ? <Home /> : 
      page === pages.introduction ? <Introduction /> : 
      page === pages.contract ? <Contract /> :
      page === pages.mybrand ? <MyOwnBrand /> :
      <Assignment />
    }
    <Footer />
  </React.Fragment>
}
// Render component in container
root.render(<App />)