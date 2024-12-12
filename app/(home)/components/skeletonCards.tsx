import { SkeletonCard } from './skeletonCard';

export default function SkeletonCards() {
  const numbers = [...Array(12).keys()];
  return (
    <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 p-10">
      {numbers.map((number) => (
        <SkeletonCard key={number} />
      ))}
    </div>
  );
}
