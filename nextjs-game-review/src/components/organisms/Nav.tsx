"use client";

import type { LanguageCode } from 'iso-639-1';
import {useLocale, useTranslations } from "next-intl";
import type { FC } from "react";

const Nav :FC = () => {
	const locale = useLocale() as LanguageCode;
	const t = useTranslations('Nav');

	return (
		<nav>
			<div>
				<p>{t('title')}</p>
			</div>

			<div>
				<ul>
					<li>aaa</li>
					<li>aaa</li>
					<li>aaa</li>
				</ul>
			</div>
		</nav>
	)
}
export default Nav;