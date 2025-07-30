"use client";

export default function Button({
  label,
  icon: Icon,
  onClick,
  innerBg = "bg-black/80",
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`relative p-[3px]  rounded-xl overflow-hidden group ${className}`}
    >
      {/* Gradient border container */}
      <span className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-border z-0" />

      {/* Inner background with blur */}
      <span
        className={`relative z-11 flex items-center gap-2 justify-center h-full w-full px-4 py-2 rounded-[10px] ${innerBg} backdrop-blur-md text-white font-medium`}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {label}
      </span>
    </button>
  );
}
