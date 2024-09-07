'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import MainContainer from '../MainContainer/MainContainer';

import MainLogo from '@png/main_logo.png';

const MainHeader: FC = () => {
  const pathname = usePathname();

  return (
    <header className="MainHeader h-12 min-h-12 bg-slate-400">
      <MainContainer>
        <ul className="h-headerHeight flex w-full items-center justify-between">
          <li>
            <Link href="/">
              <Image
                src={MainLogo}
                width="48"
                height="48"
                alt="Main logo"
                priority
              />
            </Link>
          </li>

          {pathname !== '/' && (
            <li>
              <div className="flex h-full items-center gap-8">
                <Link className="flex h-full items-center" href="/">
                  <div className="text-center align-middle text-xs font-semibold text-white uppercase hover:text-slate-700">
                    {'Каталог'}
                  </div>
                </Link>
              </div>
            </li>
          )}

          <li>
            <div className="flex h-full items-center gap-8">
              <Link className="flex h-full items-center" href="/products/new">
                <div className="text-center align-middle text-xs font-semibold text-white uppercase hover:text-slate-700">
                  {'Добавить товар'}
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </MainContainer>
    </header>
  );
};

export default MainHeader;
