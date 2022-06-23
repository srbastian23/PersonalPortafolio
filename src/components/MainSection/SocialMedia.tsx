import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

import './MainSection.scss'

type Props = {
	className?: string
}

/**
 *
 * @param {Props} props properties
 * @return {JSX.Element} the app react element
 */
const SocialMedia = (props: Props) => {
	const { className = '' } = props
	return (
		<div className={`social-media ${className}`}>
			<a className="icon">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a className="icon">
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a className="icon">
				<FontAwesomeIcon icon={faFacebook} />
			</a>
		</div>
	)
}

export default SocialMedia
