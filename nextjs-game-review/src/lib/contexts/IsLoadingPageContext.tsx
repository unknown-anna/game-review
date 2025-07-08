'use client';

import { 
  createContext,
	use,
	useContext,
  useState
} from 'react';
import LoadingScreen from '@/components/organisms/LoadingScreen';

export const isPageLoadingContext = createContext(true);

type isLoadingPageContextType = {
	isLoadingStatus: string,
  setIsLoading: (isLoadingStatus: string) => void
};

export const IsLoadingPageContext = createContext<isLoadingPageContextType>({
	isLoadingStatus: 'in',
  setIsLoading: () => {}
});

export const IsLoadingPageContextProvider = ({
	children,
}:{
	children: React.ReactNode
}) => {
  const [ isLoadingStatus, setIsLoading ] = useState('in');
	
	console.log(`isLoadingStatus = ${isLoadingStatus}`);
	return (
		<IsLoadingPageContext.Provider value={{ isLoadingStatus, setIsLoading }}>
			<LoadingScreen isLoadingStatus={isLoadingStatus} />
			{children}
		</IsLoadingPageContext.Provider>
	);
};
export const useIsLoadingPageContext = () => useContext(IsLoadingPageContext);