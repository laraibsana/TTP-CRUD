import { Link } from "react-router-dom";
import "./nav.css";

const nav = () => {
	return (
		<nav className="nav-bar">
			<div className="logo-container">
				<h1>Logo</h1>
			</div>
			<div className="menu-containers">
				<ul className="menu-items">
					<li>
						<Link className="items">Home</Link>
					</li>
					<li>
						<Link className="items">Campuses</Link>
					</li>
					<li>
						<Link className="items">Students</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default nav;
