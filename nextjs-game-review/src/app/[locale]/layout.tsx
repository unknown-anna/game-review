import Footer from '@/components/organisms/Footer';
import Nav from '@/components/organisms/Nav';
import { routing } from "@/i18n/routing";
import { IsLoadingPageContextProvider } from "@/lib/contexts/IsLoadingPageContext";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import  { 
  getMessages,
  setRequestLocale 
 } from "next-intl/server";

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
            <Nav />
              {children}
            <Footer />
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
