import SocialMedia from './SocialMedia'
import './MainSection.scss'

/**
 *
 * @return {JSX.Element} the app react element
 */
function MainSection() {
	return (
		<section className="section-home">
			<div className="section-home-container">
				<div className="text-zone">
					<h1 aria-label=" Hi,  I’m  Sebastian,  web developer" className="blast-root">
						{' '}
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							H
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							i
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							,
						</span>{' '}
						<br />{' '}
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							I
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							’
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							m
						</span>{' '}
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							S
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							e
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							b
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							a
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							s
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							t
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							i
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							a
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							n
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							,
						</span>{' '}
						<br />{' '}
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							w
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							e
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							b
						</span>{' '}
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							d
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							e
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							v
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							e
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							l
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							o
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							p
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							e
						</span>
						<span className="blast" aria-hidden="true" style={{ opacity: 1 }}>
							r
						</span>
					</h1>
					<br />
					<br />
					<br />
					<br />
					<p className="gray-text">Front End Developer / React.js Expert</p>
					<a className="flat-button">
						<div>
							<span className="bg" />
							<span className="base" />
							<span className="text">DOWNLOAD CV</span>
						</div>
					</a>
				</div>
				<SocialMedia />
			</div>
		</section>
	)
}

export default MainSection
