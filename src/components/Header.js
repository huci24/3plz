import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<nav className="nav--header">
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/hot">
						<li>Hot</li>
					</Link>
					{/* <Link to="/regular">
            <li>Regular</li>
          </Link> */}
				</ul>
			</nav>
		</>
	);
}
