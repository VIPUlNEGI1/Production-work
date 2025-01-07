import React from "react";
import { GeneratedPowerpoints } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { ExternalLink, Presentation } from "lucide-react";

const DashboardPresentations = ({
  presentations,
}: {
  presentations: GeneratedPowerpoints[];
}) => {
  if (!presentations || presentations.length === 0) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 shadow">
        <div className="flex flex-col items-center justify-center py-12">
          <Presentation className="h-12 w-12 text-gray-400 mb-4" />
          <p className="text-lg font-medium text-gray-900">
            No presentations yet
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Generate your first presentation to get started
          </p>
          <Link href="/generate">
            <button className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Create Presentation
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {presentations.map((presentation) => (
        <div
          key={presentation.id}
          className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg border border-gray-200 shadow"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold line-clamp-1">
              {presentation.title || "Untitled Presentation"}
            </h3>
            <p className="text-sm text-gray-500">
              Created{" "}
              {formatDistanceToNow(new Date(presentation.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
          <div className="px-6 pb-6">
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">
              {presentation.description || "No description available"}
            </p>
            <div className="flex justify-between items-center">
              <Link
                href={presentation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                View Presentation
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardPresentations;
