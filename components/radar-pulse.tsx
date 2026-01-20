import { Circle } from 'react-leaflet';

interface RadarPulseProps {
  center: [number, number];
}

export function RadarPulse({ center }: RadarPulseProps) {
  return (
    <>
      {/* Base glow */}
      <Circle
        center={center}
        radius={7000}
        pathOptions={{
          fillColor: '#34d399',
          fillOpacity: 0.25,
          color: 'transparent',
        }}
      />

      {/* Pulse 1 */}
      <Circle
        center={center}
        radius={9000}
        pathOptions={{
          className: 'radar-pulse radar-pulse-1',
          fillColor: '#34d399',
          fillOpacity: 0.2,
          color: 'transparent',
        }}
      />

      {/* Pulse 2 */}
      <Circle
        center={center}
        radius={11000}
        pathOptions={{
          className: 'radar-pulse radar-pulse-2',
          fillColor: '#34d399',
          fillOpacity: 0.15,
          color: 'transparent',
        }}
      />
    </>
  );
}
