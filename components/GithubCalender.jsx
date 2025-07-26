"use client";

import GitHubCalendar from "react-github-calendar";

const darkModeTheme = {
  // Contribution block colors (from lightest to darkest)
  dark: ["#2d2d2d", "#444", "#666", "#888", "#a3e635"], // last one = highest activity (e.g., lime-400)
  text: "#9ca3af", // Tailwind gray-400 for month/day labels
};

export default function GithubCalendar() {
  return (
    <div className="w-full p-4 sm:p-6 rounded-2xl bg-zinc-900 shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-white">
        GitHub Contributions
      </h2>

      <div className="overflow-auto">
        <GitHubCalendar
          username="athulcoder"
          blockSize={12}
          blockMargin={5}
          fontSize={14}
          showMonthLabels={true}
          theme={darkModeTheme} // ✅ Custom theme just for dark mode
        />
      </div>
    </div>
  );
}
