import { getAllBillionaires } from '@/app/actions/fetch-actions';
import Card from './card';

export default async function Cards() {
  const billionaires = (await getAllBillionaires()).filter(
    (billionaire: Billionaire) => !billionaire.squareImage.includes('undefined')
  );

  return (
    <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 p-10">
      {billionaires.map((billionaire: Billionaire) => (
        <Card key={billionaire.id} {...billionaire} />
      ))}
    </div>
  );
}
