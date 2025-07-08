"use client";

import type { FC } from 'react';
import type { LanguageCode } from 'iso-639-1';
import {useLocale, useTranslations } from "next-intl";

const Footer :FC = () => {
	const t = useTranslations('Footer');
	const locale = useLocale() as LanguageCode;

	return (
		<div 
			className='text-center py-10'
			style={{ backgroundColor: '#f0f0f1' }}
		>Yuki in Vancouer {new Date().getFullYear()} &copy;
		</div>
	)
}
export default Footer;