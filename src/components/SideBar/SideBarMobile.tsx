import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'

import './SideBarMobile.scss'

/**
 *
 * @return {JSX.Element} the app react element
 */
function SideBarMobile() {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<div className="sidebar-mobile">
			<div>
				<div
					className="icon-wrapper"
					onClick={() => {
						setShowMenu(true)
					}}>
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>
			{showMenu && (
				<div className="menu-mobile">
					<Menu
						handleClose={() => {
							setShowMenu(false)
						}}
						closeIcon
					/>
				</div>
			)}
		</div>
	)
}

export default SideBarMobile
