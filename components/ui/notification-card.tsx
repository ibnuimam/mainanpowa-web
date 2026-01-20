import { HTMLAttributes, ReactNode } from 'react';

export interface NotificationCardProps extends HTMLAttributes<HTMLDivElement> {
  sender: string;
  time: string;
  message: string;
  children?: ReactNode;
}

export default function NotificationCard({
  sender,
  time,
  message,
  className = '',
  children,
  ...rest
}: NotificationCardProps) {
  return (
    <div
      className={[
        'flex w-85 items-center gap-3 rounded-2xl bg-slate-300 p-3 drop-shadow-xl',
        'tracking-wide text-slate-600',
        className,
      ].join(' ')}
      {...rest}
    >
      <div className="flex aspect-square w-14 items-center justify-center rounded-xl bg-slate-950 text-slate-200">
        {children}
      </div>

      <div className="w-full space-y-1 overflow-hidden">
        <div className="flex justify-between">
          <p className="text-sm font-medium leading-none text-black">
            {sender}
          </p>
          <p className="text-xs font-medium leading-none tracking-wide">
            {time}
          </p>
        </div>

        <p className="line-clamp-1 text-[13px] font-medium leading-[1.2] tracking-normal">
          {message}
        </p>
      </div>
    </div>
  );
}
