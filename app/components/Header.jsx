"use client";

import Link from "next/link";
import Button, { BUTTON_TYPES } from "./Button";
import { FaBars} from "react-icons/fa";
import { RxCross2 } from 'react-icons/rx'
import SideBar from "./SideBar";
import { useState } from "react";

const Header = () => {
	const [isSideBarActive, setSideBarActive] = useState(false);

	function toggleSideBar() {
		setSideBarActive(!isSideBarActive);
	}

	return (
		<>
			<header className="header">
				<div className="header__logo">
					<Link href="/">significa</Link>
				</div>
				<div className="header__nav">
					<ul>
						<li className="header__nav-link">
							<Link href={"/projects"}>Projects</Link>
						</li>
					</ul>
				</div>
				<Button variant={BUTTON_TYPES.inverted}>Get a quote</Button>
				<button onClick={toggleSideBar} className="header__toggle">
					{isSideBarActive ? <RxCross2 /> : <FaBars /> }
				</button>
			</header>

			<SideBar isActive={isSideBarActive} />
		</>
	);
};

export default Header;
