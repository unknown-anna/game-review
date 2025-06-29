"use client";

import type { LanguageCode } from 'iso-639-1';
import {useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import type { FC } from "react";

const Nav :FC = () => {
	const locale = useLocale() as LanguageCode;
	const t = useTranslations('Nav');

	return (
		<nav className="fixed w-full p-5">
			<div className="grid grid-cols-3 bg-gray-100 items-center">
				<div>
					<p><Link href="/">{t('Logo')}</Link></p>
				</div>

				<div className="bg-gray-300 col-span-2">
					<ul className="flex justify-end">
						<li className="py-4 px-6 bg-gray-500"><Link href="/post">{t('Post')}</Link></li>
						<li className="py-4 px-6 bg-gray-500"><Link href="/profile">{t('Profile')}</Link></li>
						<li className="py-4 px-6 bg-gray-500">language</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Nav;