import ChiyaRecipeSection from "./components/ChiyaRecipe";
import StorySection from "./components/Story";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <video
          src="/Current-Product-Showcase_all-products.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />

      </section>

      <section className="">
        {/* <div className="absolute  w-full -top-30"> */}
        <StorySection />
        {/* </div> */}
      </section>
      <section className="">
        <ChiyaRecipeSection />
      </section>
    </>
  );
}
