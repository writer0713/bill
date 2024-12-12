import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl bg-slate-600" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-slate-600" />
        <Skeleton className="h-4 w-[200px] bg-slate-600" />
      </div>
    </div>
  );
}
