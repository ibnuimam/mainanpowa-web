'use client';

import { useEffect, useRef } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { cn } from '@/libs/utils';
import { IconLocationFilled, IconMinus, IconPlus } from '@tabler/icons-react';
import { RadarPulse } from './radar-pulse';
import Badge from './ui/badge';

const LAT = -6.147;
const LNG = 106.85;

function MapInstance({ onReady }: { onReady: (map: LeafletMap) => void }) {
  const map = useMap();

  useEffect(() => {
    onReady(map);
  }, [map, onReady]);

  return null;
}

export default function LocationMap({ className }: { className?: string }) {
  const mapRef = useRef<LeafletMap | null>(null);

  const zoomIn = () => {
    if (!mapRef.current) return;
    mapRef.current.setZoom(mapRef.current.getZoom() + 1, { animate: true });
  };

  const zoomOut = () => {
    if (!mapRef.current) return;
    mapRef.current.setZoom(mapRef.current.getZoom() - 1, { animate: true });
  };

  return (
    <div
      className={cn(
        'relative min-h-56 w-full overflow-hidden rounded-3xl glassmorphism',
        className
      )}
    >
      {/* Location badge */}
      <div className="absolute left-6 top-6 z-1000">
        <Badge
          icon={<IconLocationFilled className="h-5 w-5 text-white" />}
          title="Location"
          className="w-fit"
        />
      </div>

      {/* Map */}
      <MapContainer
        center={[LAT, LNG]}
        zoom={10}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
        attributionControl={false}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

        <RadarPulse center={[LAT, LNG]} />

        <MapInstance onReady={(map) => (mapRef.current = map)} />
      </MapContainer>

      {/* Zoom controls */}
      <button
        onClick={zoomOut}
        className="absolute bottom-6 left-6 z-1000 flex size-12 items-center justify-center rounded-full bg-black/80 text-xl text-white"
      >
        <IconMinus />
      </button>

      <button
        onClick={zoomIn}
        className="absolute bottom-6 right-6 z-1000 flex size-12 items-center justify-center rounded-full bg-black/80 text-xl text-white"
      >
        <IconPlus />
      </button>
    </div>
  );
}
