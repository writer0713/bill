import { Suspense } from 'react';
import Cards from './components/cards';
import SkeletonCards from './components/skeletonCards';

export default async function Home() {
  return (
    <div className="flex justify-center ">
      <Suspense fallback={<SkeletonCards />}>
        <Cards />
      </Suspense>
    </div>
  );
}
