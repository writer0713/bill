import { shimmer, toBase64 } from '@/app/utils/image-util';
import Image from 'next/image';
import Link from 'next/link';

export default function Card(billionaire: Billionaire) {
  return (
    <div
      className="hover:scale-105 transition-all duration-300 ease-in-out"
      key={billionaire.id}
    >
      <Link href={`/person/${billionaire.id}`} className=" *:text-white">
        <Image
          src={billionaire.squareImage}
          width={300}
          height={300}
          alt={billionaire.name}
          loading="lazy"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(300, 100)
          )}`}
          className=""
        />
        <h1 className="font-bold mt-2">{billionaire.name}</h1>
        <p className="text-sm">
          {Math.floor(billionaire.netWorth / 1000)} Billion /{' '}
          {billionaire.industries}
        </p>
      </Link>
    </div>
  );
}
