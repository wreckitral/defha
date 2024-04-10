import ButtonGradient from './assets/svg/ButtonGradient.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Devtools from "./components/Devtools.jsx"
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
    return (
        <>
            <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
                <Header />
                <Hero />
                <Project />
                <Skills />
                <Devtools />
                <Contacts />
                <Footer />
            </div>

            <ButtonGradient /> 
        </>
    )
}

export default App
