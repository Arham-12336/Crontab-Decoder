const decoderPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-[1000px] mx-auto">
        <p className="text-black/60">
          Enter the cron pattern in the first box and a human readable
          interperation will be presented in the cron pattern meaning box
        </p>
        <input type="text" name="" id="" placeholder="Enter your pattern" />
      </div>
    </div>
  );
};

export default decoderPage;
