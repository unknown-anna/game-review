
import type { FC } from 'react';
import type { LanguageCode } from 'iso-639-1';
import { getLocale, getTranslations } from 'next-intl/server';
import styles from "@/lib/scss/Index.module.scss"; 

import Section from '@/components/test/Section';
import Heading from '@/components/test/Heading';
// import { useIsLoadingPageContext } from '@/lib/contexts/IsLoadingPageContext';

type Props ={
  params: Promise<{
    locale: "ja" | "en"
  }>;
}
const Index: FC<Props> = async ({ params }) => {
  
  return (
    <main className={`w-5xl mx-auto pt-30 ${styles.index}`}>
      <Section>
        <Heading>Title</Heading>

        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </main>
  );
}
export default Index