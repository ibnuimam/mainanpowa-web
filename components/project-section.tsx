import { IconBriefcaseFilled } from '@tabler/icons-react';
import ProjectCard from './project-card';
import Badge from './ui/badge';
import MoreButton from './ui/more-botton';

type ProjectSectionProps = {
  isPage?: boolean;
};

const ProjectSection = ({ isPage = false }: ProjectSectionProps) => {
  return (
    <section className="flex flex-col gap-8 pb-32 sm:justify-center">
      <div className="flex justify-between items-center">
        <Badge
          icon={<IconBriefcaseFilled className="h-5 w-5 text-cyan-200" />}
          title="Projects"
          accent
        />
        {!isPage && (
          <div className="lg:hidden">
            <MoreButton href="/projects" title="View all projects" />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-6 flex-col lg:flex-row">
        <div className="w-full lg:max-w-1/2">
          <h2 className="text-4xl font-semibold mb-4 text-white">
            Milestones Along My Learning Journey
          </h2>
          <p className="text-white">
            Every project represents progress—showcasing how I learn, solve
            problems, and grow as a developer.
          </p>
        </div>
        {!isPage && (
          <div className="hidden lg:flex w-1/2 justify-start lg:justify-end items-center">
            <MoreButton href="/projects" title="View all projects" />
          </div>
        )}
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((_, index) => (
          <div key={index}>
            <ProjectCard />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
