import { useEffect } from 'react';
import type { FC } from 'react';
import NProgress from 'nprogress';
// import loaderIcon from '../assets/loader-icon.svg';

const LoadingScreen: FC = () => {
  useEffect(() => {
    NProgress.start();

    return (): void => {
      NProgress.done();
    };
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <svg className="animate-bounce w-6 h-6 ...">Loading</svg>
    </div>
  );
};

export default LoadingScreen;