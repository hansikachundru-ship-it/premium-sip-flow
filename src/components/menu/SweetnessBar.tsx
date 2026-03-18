const SweetnessBar = ({ level }: { level: number }) => (
  <div className="flex items-center gap-1 mt-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${i <= level ? "bg-matcha" : "bg-crimson/20"}`}
      />
    ))}
  </div>
);

export const parseSweetness = (s?: string): number => {
  if (!s) return 0;
  const match = s.match(/(\d)\/5/);
  return match ? parseInt(match[1]) : 0;
};

export default SweetnessBar;
