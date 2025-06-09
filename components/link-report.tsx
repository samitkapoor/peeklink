import { Metadata } from '@/types/metadata';
import React, { useState } from 'react';

// Reusable components
const StatusIndicator = ({ isAvailable }: { isAvailable: boolean }) => (
  <span
    className={`px-2 py-1 ${
      isAvailable ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
    } rounded-full text-xs font-medium`}
  >
    {isAvailable ? 'Available' : 'Missing'}
  </span>
);

const MetadataItem = ({ label, isAvailable }: { label: string; isAvailable: boolean }) => (
  <div className="flex items-center justify-between">
    <span className="font-medium">{label}</span>
    <StatusIndicator isAvailable={isAvailable} />
  </div>
);

type MetadataRequirement = {
  label: string;
  isAvailable: boolean;
  suggestion: string;
};

type MetadataSection = {
  title: string;
  description: string;
  requirements: MetadataRequirement[];
  allAvailable: boolean;
};

const ImprovementSuggestions = ({ requirements }: { requirements: MetadataRequirement[] }) => {
  const missingRequirements = requirements.filter((req) => !req.isAvailable);

  if (missingRequirements.length === 0) return null;

  return (
    <div className="p-3 mt-3 bg-orange-50 border-2 border-orange-200 rounded-xl shadow-sm">
      <h4 className="font-semibold text-orange-500 mb-2">Improvement Suggestions:</h4>
      <ul className="list-disc pl-5 text-sm text-black/80">
        {missingRequirements.map((req, index) => (
          <li key={index} className="mb-1 transition-colors duration-150">
            {req.suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MetadataSection = ({ section }: { section: MetadataSection }) => (
  <div className="space-y-2 mt-4">
    <h3 className="text-lg font-semibold">{section.title}</h3>
    <div className="space-y-2">
      {section.requirements.map((requirement, index) => (
        <MetadataItem key={index} label={requirement.label} isAvailable={requirement.isAvailable} />
      ))}
    </div>
    <ImprovementSuggestions requirements={section.requirements} />
  </div>
);

const LinkReport = ({ data }: { data: Metadata }) => {
  // State for accordion
  const [isExpanded, setIsExpanded] = useState(false);

  // Check for OpenGraph metadata fields
  const hasOgTitle = !!data.openGraph?.title;
  const hasOgDescription = !!data.openGraph?.description;
  const hasOgImage = !!data.openGraph?.image;

  // Check for Twitter metadata fields
  const hasTwitterCard = !!data.twitter?.card;
  const hasTwitterTitle = !!data.twitter?.title;
  const hasTwitterDescription = !!data.twitter?.description;
  const hasTwitterImage = !!data.twitter?.image;

  // Determine overall status for each platform
  const hasAllOgMeta = hasOgTitle && hasOgDescription && hasOgImage;
  const hasAllTwitterMeta =
    hasTwitterCard && hasTwitterTitle && hasTwitterDescription && hasTwitterImage;
  const isFullyOptimized = hasAllOgMeta && hasAllTwitterMeta;

  // Define metadata sections
  const sections: MetadataSection[] = [
    {
      title: 'Open Graph (Facebook, LinkedIn, etc.)',
      description: 'Open Graph metadata is used by Facebook, LinkedIn, and other platforms',
      allAvailable: hasAllOgMeta,
      requirements: [
        {
          label: 'Title',
          isAvailable: hasOgTitle,
          suggestion: 'Add an Open Graph title tag (og:title).'
        },
        {
          label: 'Description',
          isAvailable: hasOgDescription,
          suggestion: 'Include an Open Graph description (og:description).'
        },
        {
          label: 'Image',
          isAvailable: hasOgImage,
          suggestion: 'Add an Open Graph image (og:image) with 1200×630px dimensions.'
        }
      ]
    },
    {
      title: 'Twitter Card',
      description: 'Twitter Card metadata is used when sharing links on Twitter',
      allAvailable: hasAllTwitterMeta,
      requirements: [
        {
          label: 'Title',
          isAvailable: hasTwitterTitle,
          suggestion: 'Add a Twitter title (twitter:title).'
        },
        {
          label: 'Description',
          isAvailable: hasTwitterDescription,
          suggestion: 'Include a Twitter description (twitter:description).'
        },
        {
          label: 'Image',
          isAvailable: hasTwitterImage,
          suggestion: 'Add a Twitter image (twitter:image) with a 2:1 aspect ratio.'
        }
      ]
    }
  ];

  // Count total missing items
  const totalMissingItems = sections.reduce(
    (count, section) => count + section.requirements.filter((r) => !r.isAvailable).length,
    0
  );

  return (
    <div className="max-w-[1400px] w-full px-4 mt-10">
      <div className="border-2 rounded-lg overflow-hidden w-full flex flex-col">
        <button
          className={`w-full p-4 flex items-center justify-between bg-white border-b-2 border-gray-800 transition-colors duration-200 outline-none`}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <div className="flex items-center w-full">
            <div
              className={`flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center ${
                isFullyOptimized ? 'text-green-500' : 'text-orange-500'
              }`}
            >
              {isFullyOptimized ? (
                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="ml-3 flex flex-col items-start justify-start w-full">
              <h2 className="text-lg font-bold leading-7">Link Preview Report</h2>
              <p
                className={`text-sm leading-none font-medium ${
                  isFullyOptimized ? 'text-green-500' : 'text-orange-500'
                }`}
              >
                {isFullyOptimized
                  ? 'Your link is fully optimized for social sharing!'
                  : `${totalMissingItems} item${
                      totalMissingItems !== 1 ? 's' : ''
                    } missing for optimal social sharing`}
              </p>
            </div>
          </div>
          {
            <div className="flex-shrink-0">
              <svg
                className={`w-5 h-5 transition-transform ${
                  isExpanded ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          }
        </button>

        {isExpanded && (
          <div className="p-5 pt-0 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {sections.map((section, index) => (
                <MetadataSection key={index} section={section} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkReport;
