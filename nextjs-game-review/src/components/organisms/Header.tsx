"use client";

import style from "@/lib/scss/header.module.scss";
import type { FC } from "react";

const Header :FC = () => {
	return (
		<header className={style.header}>
			<h1 className={style.header__title}>Game Review</h1>
		</header>
	)
}
export default Header;