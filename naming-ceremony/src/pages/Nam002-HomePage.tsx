import React, { Suspense, useState } from 'react';
import { INITIAL_WISHES, type Wish } from '../data/content';

const HeroSection = React.lazy(() => import('../components/Nam002/Nam002-HeroSection'));
const CountDown = React.lazy(() => import('../components/Nam002/Nam002-CountDown'));
const WarmInvite = React.lazy(() => import('../components/Nam002/Nam002-WarmInvite'));
const Location = React.lazy(() => import('../components/Nam002/Nam002-Location'));
const Wishes = React.lazy(() => import('../components/Nam002/Nam002-Wishes'));
const SendWishes = React.lazy(() => import('../components/Nam002/Nam002-SendWishes'));
const Schedule = React.lazy(() => import('../components/Nam002/Nam002-Schedule'));
const Video = React.lazy(() => import('../components/Nam002/Nam002-Video'));
const Footer = React.lazy(() => import('../components/Nam002/Nam002-Footer'));

export default function Nam002HomePage() {
  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES);

  const handleNewWish = (wish: Wish) => {
    setWishes((prev) => [wish, ...prev]);
  };

  return (
    <main>
      <Suspense fallback={<div className="min-h-screen bg-[#f4e5e3]" />}>
        <HeroSection />
        <CountDown />
        <WarmInvite />
        <Location />
        <Wishes wishes={wishes} />
        <SendWishes onSubmit={handleNewWish} />
        <Schedule />
        <Video />
        <Footer />
      </Suspense>
    </main>
  );
}
