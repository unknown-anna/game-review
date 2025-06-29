"use client";

import type { FC } from 'react';
import { usePortfolio } from '@/lib/api/internal/v1/portfolio/hooks';
import Image from 'next/image'
import { Masonry } from "@mui/lab"

const PortfolioList: FC = () => {
	const { data: portfolioList, error, isLoading } = usePortfolio();

	return (
      <Masonry columns={4} spacing={0}>
        { isLoading && <div>Loading...</div> }

        { portfolioList?.portfolios.map((portfolio) => (
          <div key={portfolio.filename}>
            <Image
              src={`/img/${portfolio.filename}`}
              width={portfolio.width}
              height={portfolio.height}
              alt="Picture of the author"
            />
          </div>
          )) 
        }
      </Masonry>
	)
}
export default PortfolioList