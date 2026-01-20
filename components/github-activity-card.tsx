import { getGithubContributions } from '@/libs/github';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import Badge from './ui/badge';

type ContributionDay = {
  date: string;
  contributionCount: number;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

export default async function GithubActivityCard({
  username,
}: {
  username: string;
}) {
  const calendar = await getGithubContributions(username);

  return (
    <div className="relative w-full max-w-5xl rounded-3xl border p-6 glassmorphism">
      {/* Header */}
      <div className="mb-6 flex md:flex-row md:items-center justify-between flex-col items-start gap-2">
        <Badge
          icon={<IconBrandGithubFilled className="h-5 w-5 text-white" />}
          title="Github activity"
          className="w-fit"
        />

        <p className="text-sm text-white/80">
          <span className="font-semibold text-white">
            {calendar.totalContributions.toLocaleString('en-US')}
          </span>{' '}
          contributions in the last year
        </p>
      </div>

      {/* Contribution Grid */}
      <div className="overflow-x-auto">
        <div className="flex gap-1.5">
          {calendar.weeks.map((week: ContributionWeek, i: number) => (
            <div key={i} className="flex flex-col gap-1.5">
              {week.contributionDays.map((day: ContributionDay) => (
                <div
                  key={day.date}
                  className={`h-4 w-4 rounded-md ${getColor(
                    day.contributionCount
                  )}`}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-white/60">
        Last pushed on{' '}
        <span className="text-white">Saturday, January 17th 2026</span>
      </p>
    </div>
  );
}

function getColor(count: number) {
  if (count === 0) return 'bg-[#1f2937]';
  if (count < 5) return 'bg-emerald-900';
  if (count < 10) return 'bg-emerald-700';
  if (count < 20) return 'bg-emerald-500';
  return 'bg-emerald-300';
}
