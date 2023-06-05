import RotatingPictureFrame from "components/RotatingPictureFrame";

// Images for Image Slider
const imageList = [
  "http://placekitten.com/500/600",
  "http://placekitten.com/400/400",
  "http://placekitten.com/400/500",
  "http://placekitten.com/500/400",
  "http://placekitten.com/400/600"
]
  ;

export default function Home() {
  return (
    <main>
      <RotatingPictureFrame images={imageList} />
    </main>
  );
}
