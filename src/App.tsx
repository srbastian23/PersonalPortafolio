import MainSection from './components/MainSection/MainSection'
// import AboutMe from './components/AboutMe'
// import MySkills from './components/MySkills'
import SideBar from './components/SideBar/SideBarDesktop'
import SideBarMobile from './components/SideBar/SideBarMobile'

import './App.scss'

/**
 * App - the main application react element
 *
 * @return {JSX.Element} the app react element
 */
function App() {
	return (
		<div className="App">
			<SideBar />
			<div className="container">
				<SideBarMobile />
				<MainSection />
				{/* <AboutMe />
				<MySkills /> */}
			</div>
		</div>
	)
}

export default App
