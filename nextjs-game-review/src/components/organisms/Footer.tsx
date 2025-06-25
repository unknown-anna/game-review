"use client";

import type { FC } from 'react';
import { Button } from '@mui/material';
import { useUserLanguageStateContext } from '@/lib/contexts/UserLanguageStateContext';
import type { LanguageCode } from 'iso-639-1';
import {useLocale, useTranslations } from "next-intl";


const Footer :FC = () => {
	const t = useTranslations('Footer');
	const locale = useLocale() as LanguageCode;
	const { switchLocale } = useUserLanguageStateContext();

	return (
		<footer>
			<Button onClick={() => switchLocale('ja')}>日本語</Button>
			<Button onClick={() => switchLocale('en')}>English</Button>
		</footer>
	)
}

export default Footer;