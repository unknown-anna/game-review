"use client";

import type { LanguageCode } from 'iso-639-1';
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import type { FC } from "react";
import styles from "@/lib/scss/Nav.module.scss"; 
import { motion } from "framer-motion";
import Image from 'next/image';

const Nav :FC = () => {
	const locale = useLocale() as LanguageCode;
	const t = useTranslations('Nav');

	return (
		<motion.nav className={`fixed w-full p-5 ${styles.nav}`}>
			<div className={`grid grid-cols-3 items-center ${styles.nav_container}`}>
				<div className={`${styles.nav_logo}`}>
					<Link href="/">
						<Image 
							src='/img/yukiincanada_logo.png' 
							alt={t('Logo')} 
							width={808} 
							height={465} 
						/></Link>
				</div>

				<div className="col-span-2">
					<ul className="flex justify-end">
						<li className="py-4 px-6"><Link href="/post/441">{t('Profile')}</Link></li>
					</ul>
				</div>
			</div>
		</motion.nav>
	)
}
export default Nav;