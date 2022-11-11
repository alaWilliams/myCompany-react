import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container container">
				<div className="footer-copyright">
					Nazwa firmy - wszelkie prawa zastrzeżone, 2019
				</div>

				<div className="social-media">
					<div className="instagram">
						<FaInstagram />
					</div>
					<div className="facebook">
						<FaFacebookSquare />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
