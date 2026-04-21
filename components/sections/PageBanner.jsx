const PageBanner = ({ title, bgImage }) => {
  const defaultBg =
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2029&auto=format&fit=crop';

  return (
    <section className="relative w-full h-[240px] sm:h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage || defaultBg})` }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/70" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
