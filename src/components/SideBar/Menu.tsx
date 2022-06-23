import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import SocialMedia from '../MainSection/SocialMedia'

import './Menu.scss'

type Props = {
	handleClose?: () => void
	closeIcon?: boolean
}
const Menu = (props: Props) => {
	const { handleClose, closeIcon } = props
	return (
		<div className="menu">
			<div className="header">
				{closeIcon && (
					<div className="close-icon" onClick={handleClose}>
						<FontAwesomeIcon icon={faXmark} />
					</div>
				)}
				<div className="description">
					<h2>Sebastian</h2>
					<p>Web developer</p>
				</div>
			</div>
			<div className="list-nav">
				<ul>
					<li>About Me</li>
					<li>My Skills</li>
				</ul>
			</div>
			<div className="menu-botton-wrapper">
				<SocialMedia className="menu-botton" />
			</div>
		</div>
	)
}

export default Menu
