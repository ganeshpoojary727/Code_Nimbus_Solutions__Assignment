import React, { Suspense, useState } from 'react';
import { INITIAL_WISHES, type Wish } from '../data/content';

const HeroSection = React.lazy(() => import('../components/HeroSection'));
const CountDown = React.lazy(() => import('../components/CountDown'));
const WarmInvite = React.lazy(() => import('../components/WarmInvite'));
const Location = React.lazy(() => import('../components/Location'));
const Wishes = React.lazy(() => import('../components/Wishes'));
const SendWishes = React.lazy(() => import('../components/SendWishes'));
const Schedule = React.lazy(() => import('../components/Schedule'));
const Video = React.lazy(() => import('../components/Video'));
const Footer = React.lazy(() => import('../components/Footer'));

export default function HomePage() {
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
