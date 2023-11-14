import { OurDescription } from "../Constants/Consts";
export const About = () => {
  return (
    <section className="w-full h-full relative bg-gradient-to-t p-20 flex items-center justify-center from-zinc-900 to-neon-blue">
      <p className="z-10 text-white text-3xl text-center max-w-[60ch] tracking-wide font-serif leading-relaxed">
        {OurDescription}
      </p>
      <img src="/Images/platos-fuertes/pasta-alienigena.jpg" className="absolute inset-0 brightness-[0.12] w-full object-cover h-full object-center" alt="" />
    </section>
  );
};
