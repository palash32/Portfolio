const Navigation = () => {
  return (
    <>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a
            className="text-slate-300 hover:text-white text-sm font-medium leading-normal"
            href="#"
          >
            Skills Matrix
          </a>
          <a
            className="text-slate-300 hover:text-white text-sm font-medium leading-normal"
            href="#"
          >
            Project Archives
          </a>
          <a
            className="text-slate-300 hover:text-white text-sm font-medium leading-normal"
            href="#"
          >
            Career Timeline
          </a>
          <a
            className="text-slate-300 hover:text-white text-sm font-medium leading-normal"
            href="#"
          >
            About
          </a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Establish Comms</span>
        </button>
      </div>
      <button className="md:hidden flex items-center justify-center p-2 rounded-lg text-slate-300 hover:bg-slate-700/50">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </>
  );
};

export default Navigation;
