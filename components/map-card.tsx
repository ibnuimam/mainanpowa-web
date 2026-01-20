'use client';
import dynamic from 'next/dynamic';

const LocationMap = dynamic(() => import('@/components/location-map'), {
  ssr: false,
});

export default function Page() {
  return <LocationMap />;
}
