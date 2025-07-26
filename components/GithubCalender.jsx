"use client";

import GitHubCalendar from "react-github-calendar";
import React, { useEffect } from "react";

export default function GithubCalendar() {
  // Optional: add styling after mount
  useEffect(() => {
    const labels = document.querySelectorAll(".react-activity-calendar text");
    labels.forEach((label) => {
      label.setAttribute("fill", "#9CA3AF"); // Tailwind's gray-400
    });
  }, []);

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
          colorScheme="dark"
        />
      </div>
    </div>
  );
}
