'use client';

import { type FC, useContext, useEffect } from 'react';
import { LevelContext } from '@/lib/contexts/TestContext';

type Props = {
	children: React.ReactNode
}

const Section: FC<Props> = ({ children }) => {
	const level = useContext(LevelContext);

	return (
		<section>
			<LevelContext value={level+1}>
				{children}
			</LevelContext>
		</section>
	);
};
export default Section;