const Footer = () => {
  return (
    <footer className="mt-auto px-4 md:px-10 pb-5">
      <div className="flex flex-col gap-3 p-4 border-t border-solid border-t-[#282e39]">
        <div className="flex gap-6 justify-between">
          <p className="text-slate-200 text-base font-medium leading-normal">
            Profile Sync
          </p>
          <p className="text-slate-400 text-base font-medium leading-normal">
            75% Complete
          </p>
        </div>
        <div className="rounded-full bg-[#282e39] h-2">
          <div
            className="h-2 rounded-full bg-primary"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
