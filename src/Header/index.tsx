import { Link } from 'react-router-dom';
import Container from '../Container';
import './Header.css';

function Header() {
	return (
		<div className="Header">
			<Container width={'1140px'}>
				<Link to={'/'} className="HeaderInner">
					<img src="/logo.png" alt="Logo" />
				</Link>
			</Container>
		</div>
	);
}

export default Header;
