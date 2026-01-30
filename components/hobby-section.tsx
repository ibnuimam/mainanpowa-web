import { IconCameraFilled } from '@tabler/icons-react';
import Badge from './ui/badge';
import MoreButton from './ui/more-botton';
import { getVideos } from '@/services/youtube.serv';
import YoutubeList from './youtube-list';

type HobbySectionProps = {
  isPage?: boolean;
};

const HobbySection = async ({ isPage = false }: HobbySectionProps) => {
  let videos: any[] = [];
  videos = await getVideos(10);

  return (
    <section className="flex flex-col gap-8 pb-32 sm:justify-center">
      <div className="flex justify-between items-center">
        <Badge
          icon={<IconCameraFilled className="h-5 w-5 text-cyan-200" />}
          title="Hobbies"
          accent
        />
        {!isPage && (
          <div className="lg:hidden">
            <MoreButton href="/hobbies" title="View all hobbies" />
          </div>
        )}
      </div>

      <div className="flex items-center lg:justify-between gap-6 flex-col lg:flex-row">
        <div className="w-full lg:max-w-1/2">
          <h2 className="text-4xl font-semibold mb-4 text-white">
            Moments Beyond the Code
          </h2>
          <p className="text-white">
            Activities and interests that recharge my creativity and shape who I
            am beyond my journey as a developer.
          </p>
        </div>
        {!isPage && (
          <div className="hidden lg:flex w-1/2 justify-start lg:justify-end items-center">
            <MoreButton href="/hobbies" title="View all hobbies" />
          </div>
        )}
      </div>
      <div className="mt-12">
        <YoutubeList videos={videos} limit={4} />
      </div>
    </section>
  );
};

export default HobbySection;
