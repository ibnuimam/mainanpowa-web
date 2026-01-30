import GithubActivityCard from './github-activity-card';
import LastWorkCard from './last-work-card';
import MapCard from './map-card';
import TechStackCard from './tech-stack-card';
import {
  IconBrandInstagramFilled,
  IconBrandTiktokFilled,
  IconBrandX,
  IconBrandYoutubeFilled,
} from '@tabler/icons-react';
import LinkCard from './ui/link-card';

const BentoSection = () => {
  return (
    <section className="flex flex-col gap-8 pb-32 sm:justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-6">
        <MapCard />
        <div className="col-span-2">
          <LastWorkCard />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="min-h-24 md:min-h-auto">
            <LinkCard
              href="https://www.instagram.com/mainanpowa/"
              icon={<IconBrandInstagramFilled className="size-12" />}
            />
          </div>
          <div className="min-h-24 md:min-h-auto">
            <LinkCard
              href="https://www.x.com/mainanpowa"
              icon={<IconBrandX className="size-12" />}
            />
          </div>
          <div className="min-h-24 md:min-h-auto">
            <LinkCard
              href="https://www.youtube.com/@mainanpowa"
              icon={<IconBrandYoutubeFilled className="size-12" />}
            />
          </div>
          <div className="min-h-24 md:min-h-auto">
            <LinkCard
              href="https://www.tiktok.com/@mainanpowa"
              icon={<IconBrandTiktokFilled className="size-12" />}
            />
          </div>
          <div className="col-span-2 min-h-24 md:min-h-auto">
            <LinkCard href="/#projects" title="Discover more projects" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GithubActivityCard username="ibnuimam" />
        <TechStackCard />
      </div>
    </section>
  );
};

export default BentoSection;
