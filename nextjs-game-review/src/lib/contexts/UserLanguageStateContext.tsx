"use client";

import Cookies from "js-cookie";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

export const COOKIE_KEY_USER_LOCATE = 'gamerReviewLocale';

type userLanguageStateContextType = {
	isLocaleSelected: boolean;
	switchLocale: (locale: "ja" | "en") => void;
}
export const UserLanguageStateContext = createContext<userLanguageStateContextType>({
	isLocaleSelected: false,
	switchLocale: (locale: "ja" | "en") => {},
});

export const UserLanguageStateContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {

	const [ isLocaleSelected, setIsLocaleSelected] = useState(true);
	const pathname = usePathname();
	const currentLocale = useLocale();

	useEffect(() => {
		setIsLocaleSelected(!!Cookies.get(COOKIE_KEY_USER_LOCATE));
	}, []);

	const switchLocale = (locale: "ja" | "en") => {
		Cookies.set(COOKIE_KEY_USER_LOCATE, locale, {
			domain: "localhost",
			path: "/",
			secure: true,
			sameSite: "lax",
			expires: 3650, // 10 years
		});
		setIsLocaleSelected(true);
		console.log(`pathname = ${pathname}`);
		console.log(`locale = ${locale}`);
		// window.location.href = `/${locale}${pathname}`;
	};

	return (
		<UserLanguageStateContext.Provider
			value={{isLocaleSelected, switchLocale}}
		>
			{children}
		</UserLanguageStateContext.Provider>
	);

}

export const useUserLanguageStateContext = () => useContext(UserLanguageStateContext);