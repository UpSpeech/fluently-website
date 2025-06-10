const FeaturesVariantSection = () => {
  // ...existing code...

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full mb-6 shadow-sm border border-calm-light/50 backdrop-blur-sm">
            <span className="w-5 h-5 rounded-full bg-gradient-to-br from-calm-navy/10 to-calm-lavender/10 flex items-center justify-center mr-2">
              <span className="text-xs">⚡</span>
            </span>
            <span className="text-calm-charcoal/80 text-sm font-medium">
              Key Benefits
            </span>
          </div>

          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-calm-charcoal mb-6">
            {/* ...existing code... */}
          </h2>
        </div>

        {/* ...existing code... */}
      </div>
    </section>
  );
};

export default FeaturesVariantSection;
