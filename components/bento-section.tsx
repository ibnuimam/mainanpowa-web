import GithubActivityCard from './github-activity-card';
import LastWorkCard from './last-work-card';
import MapCard from './map-card';
import TechStackCard from './tech-stack-card';

const BentoSection = () => {
  return (
    <section className="flex flex-col gap-8 pb-32 sm:justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MapCard />
        <div className="col-span-2">
          <LastWorkCard />
        </div>
        <div className="">xx</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GithubActivityCard username="ibnuimam" />
        <TechStackCard />
      </div>
    </section>
  );
};

export default BentoSection;
