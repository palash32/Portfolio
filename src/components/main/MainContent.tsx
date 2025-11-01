const MainContent = () => {
  return (
    <main className="flex flex-col items-center flex-1 py-10 md:py-20">
      {/* HeadlineText */}
      <h1 className="text-slate-100 tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
        Analyzing Engineer Profile: John Doe
      </h1>
      {/* BodyText */}
      <p className="text-slate-300 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-xl">
        Mission: Build innovative solutions. Interact with the central data
        cube to explore my skills, projects, and career journey.
      </p>
      {/* Central Interactive Element */}
      <div className="relative w-full aspect-square max-w-md my-10 flex items-center justify-center">
        {/* Image representing the central cube */}
        <div
          className="w-full h-full bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASi9zNKhPNQ-dV2lzaqM2srF_vtN26txWHQGvj5rOMbW7oRd_yIeXdlXyGe_Kul6VDTTEdSfi_-fWYIRIyX9gG14I_YGwBbSE3Zaf_-bv5MIrePlhBK3JY5ivbxYz05aBqK1COFJdQJtz1QWjZFALpGgPufnwGI0rPnEx9wMYS6PLXlsZQ8L1-2qY6jsWPFIMgFDajNlpDEVDMt6ljUdQN3VabGGKHKmUoXP0ezZm4PrYXbz3ZYuyqTDGM1ZHvovPRJJs4FL1zZnt0")',
          }}
        ></div>
        {/* Holographic Info Panels (positioned around the central element) */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
          <a
            className="flex flex-col items-center p-4 rounded-lg bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:border-primary/50 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-primary text-3xl">
              hub
            </span>
            <span className="text-sm font-medium mt-1 text-slate-200">
              Skills Matrix
            </span>
          </a>
        </div>
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4">
          <a
            className="flex flex-col items-center p-4 rounded-lg bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:border-primary/50 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-primary text-3xl">
              archive
            </span>
            <span className="text-sm font-medium mt-1 text-slate-200">
              Project Archives
            </span>
          </a>
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4">
          <a
            className="flex flex-col items-center p-4 rounded-lg bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:border-primary/50 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-primary text-3xl">
              timeline
            </span>
            <span className="text-sm font-medium mt-1 text-slate-200">
              Career Timeline
            </span>
          </a>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
          <a
            className="flex flex-col items-center p-4 rounded-lg bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:border-primary/50 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-primary text-3xl">
              badge
            </span>
            <span className="text-sm font-medium mt-1 text-slate-200">
              Identity Profile
            </span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
