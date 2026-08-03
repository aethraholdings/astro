function SectionTitle({
  title,
  subtitle,
  align = "left",
}) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {subtitle && (
        <p className="uppercase tracking-[0.25em] text-sm text-amber-700 mb-3">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-light leading-tight">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;