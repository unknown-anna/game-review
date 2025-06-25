
import type { FC } from 'react';
import type { LanguageCode } from 'iso-639-1';
import { getLocale, getTranslations } from 'next-intl/server';

type Props ={
  params: Promise<{
    locale: "ja" | "en"
  }>;
}
const Index: FC<Props> = async ({ params}) => {
  const t = await getTranslations('Meta');
  const resolveParams = await params;

  return (
    <main>
      this is index under locale
      <p>locale = {resolveParams.locale}</p>
    </main>
  );
}
export default Index