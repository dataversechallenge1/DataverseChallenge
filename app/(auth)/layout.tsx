import React from 'react';
import Image from 'next/image';
import { Logo } from '../(dashboard)/_components/logo';
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div>
        {/* Your existing code for the layout goes here */}

        <section className="h-screen">
          <div className="h-full">
            {/* Left column container with background */}
            <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              </div>

              {/* Right column container */}
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                <form>
                  {/* Your existing form code goes here */}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* End of your existing code for the layout */}
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
