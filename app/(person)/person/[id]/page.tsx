import { getBillionarieDetails } from '@/app/actions/fetch-actions';
import Image from 'next/image';

export default async function PersonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const details: BillionaireDetails = await getBillionarieDetails(id);
  const financialAssets: financialAsset[] = details.financialAssets;
  return (
    <div className="flex flex-col items-center gap-5 p-10">
      <div className="flex flex-col gap-3 p-10 *:text-white bg-slate-700">
        <Image
          src={details.squareImage}
          width={300}
          height={100}
          alt={details.name}
          className="mb-3"
        />

        <h1 className="text-2xl font-extrabold">{details.name}</h1>
        <p>Networth : {Math.floor(details.netWorth / 1000)} Billion</p>
        <p>Country : {details.country}</p>
        <p>Industry : {details.industries}</p>
        <p>{details.bio}</p>
      </div>

      {financialAssets && (
        <div className="w-full p-10 bg-slate-700 *:text-white">
          <h1 className="text-2xl mb-6 font-extrabold">Financial Assets</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {financialAssets.map((asset: financialAsset, index: number) => (
              <div
                key={index}
                className="border border-slate-400 rounded-sm p-4"
              >
                <p>Ticker: {asset.ticker}</p>
                <p>Shares: {asset.numberOfShares.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
