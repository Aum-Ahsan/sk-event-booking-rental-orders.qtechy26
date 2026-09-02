import { GalleryExperience } from "../../../components/gallery/GalleryExperience";

export function GalleryPage({ story = false }: { story?: boolean }) {
  return <GalleryExperience story={story} />;
}
