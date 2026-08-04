function StepCard({ step, number }) {
  const Icon = step.icon;

  return (
    <div className="relative rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700">
        <Icon size={30} />
      </div>

      <span className="absolute right-8 top-8 text-5xl font-bold text-stone-100">
        {number}
      </span>

      <h3 className="mb-4 text-2xl font-semibold">
        {step.title}
      </h3>

      <p className="leading-7 text-zinc-600">
        {step.description}
      </p>
    </div>
  );
}

export default StepCard;