import { render } from '@testing-library/react'
import App from './App'

test('renders Personal Protafolio', () => {
	const appRender = render(<App />)
	expect(appRender).not.toBe(null)
})
