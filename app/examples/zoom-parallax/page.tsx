import ZoomParalaxAnimation from "@/registry/animations/source/zoom-paralax-animation";
import Picture1 from "@/public/zoomParalax/picture1.jpg";
import Picture2 from "@/public/zoomParalax/picture2.avif";
import Picture8 from "@/public/zoomParalax/picture8.avif";
import Picture4 from "@/public/zoomParalax/picture4.avif";
import Picture5 from "@/public/zoomParalax/picture5.avif";
import Picture6 from "@/public/zoomParalax/picture6.avif";
import Picture7 from "@/public/zoomParalax/picture7.avif";

const pictures = [
  Picture1,
  Picture2,
  Picture8,
  Picture4,
  Picture5,
  Picture6,
  Picture7,
];
const page = () => {
  return (
    <section>
      <h1 className="text-7xl">Scroll to see the animation...</h1>
      <div className="my-64 w-full">
        <ZoomParalaxAnimation pictures={pictures} />
      </div>
    </section>
  );
};

export default page;
