import Welcome from './comonents/Welcome';
import Header from './comonents/Header';
import Info from './comonents/Info';
import './App.css'

function App() {
  return (
    <>
      <Header
      logoText="My First React App"
      />
      <Welcome
      message="Hello!"
      />
      <Info
      firstname="Yuta" lastname="Hamasaki"
      age={25}
      isStudent={true}
      />
    </>
  )
}

export default App
