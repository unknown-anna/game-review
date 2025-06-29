"use client";

import type { FC } from 'react';
import type { LanguageCode } from 'iso-639-1';
import {useLocale, useTranslations } from "next-intl";

const Footer :FC = () => {
	const t = useTranslations('Footer');
	const locale = useLocale() as LanguageCode;

	return (
		<footer>
			footer
		</footer>
	)
}
export default Footer;