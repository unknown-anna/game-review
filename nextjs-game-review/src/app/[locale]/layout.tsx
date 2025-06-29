import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import  { 
  getMessages,
  setRequestLocale 
 } from "next-intl/server";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { routing } from "@/i18n/routing";
import { UserLanguageStateContextProvider } from "@/lib/contexts/UserLanguageStateContext";
import Nav from '@/components/organisms/Nav';
import Footer from '@/components/organisms/Footer';

import "@/lib/css/global.css";
import "@/lib/scss/global.scss";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(  
  props: Readonly<{
    children: React.ReactNode;
    params: { locale:string };
  }>
) {
  const Locale = (await props.params).locale as 'en' | 'ja';
  const messages = await getMessages();
  const { children } = props;
  
  setRequestLocale(Locale);

  return (
    <html lang={Locale}>
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <NextIntlClientProvider locale={Locale} messages={messages}>
            <UserLanguageStateContextProvider>
              <Nav />
              {children}
              <Footer />
            </UserLanguageStateContextProvider>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
