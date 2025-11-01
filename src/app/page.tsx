import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1 className="text-slate-100 tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">Analyzing Engineer Profile: John Doe</h1>
      <p className="text-slate-300 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-xl">
        Mission: Build innovative solutions. Interact with the central data cube to explore my skills, projects, and career journey.
      </p>
      <div className="relative w-full aspect-square max-w-md my-10 flex items-center justify-center">
        <Image src="/cube.png" alt="A glowing blue and purple holographic cube with circuit patterns, rotating slowly in a dark space." width={500} height={500} />
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
          <Link className="flex flex-col items-center p-4 rounded-lg bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:border-primary/50 transition-all" href="/skills">
            <span className="material-symbols-outlined text-primary text-3xl">hub</span>
            <span className="text-sm font-medium mt-1 text-slate-200">Skills Matrix</span>
          </Link>
        </div>
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4">
          <Link className="flex flex-col items-center p-4 rounded-lg bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:border-primary/50 transition-all" href="/projects">
            <span className="material-symbols-outlined text-primary text-3xl">archive</span>
            <span className="text-sm font-medium mt-1 text-slate-200">Project Archives</span>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4">
          <Link className="flex flex-col items-center p-4 rounded-lg bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:border-primary/50 transition-all" href="/career">
            <span className="material-symbols-outlined text-primary text-3xl">timeline</span>
            <span className="text-sm font-medium mt-1 text-slate-200">Career Timeline</span>
          </Link>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
          <Link className="flex flex-col items-center p-4 rounded-lg bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:border-primary/50 transition-all" href="/about">
            <span className="material-symbols-outlined text-primary text-3xl">badge</span>
            <span className="text-sm font-medium mt-1 text-slate-200">Identity Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
