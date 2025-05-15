import './css/App.css'
import './css/style.css'
import Header from './components/header/header'
import Intro from './components/main/intro/intro'
import Partners from './components/main/partners/partners'
import Advatages from './components/main/advantages/advantages'
import Accessibility from './components/main/accessibility/accessibility'

function App() {

  return (
    <>
      <Header />
      <Intro />
      <Partners />
      <Advatages />
      <Accessibility />
    </>
  )
}

export default App
