"use client";

import { Loader2, VideoIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import { CreatePowerpoint } from "../app/generate/actions";
import { useToast } from "../hooks/use-toast";

export default function GenerateForm() {
  const { toast } = useToast();
  const [url, setUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateYouTubeUrl = (url: string) => {
    const pattern =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return pattern.test(url);
  };

  const getVideoId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  useEffect(() => {
    console.log("Current URL:", url);
    console.log("Is Valid:", isValid);
  }, [url, isValid]);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    console.log("URL changed:", newUrl);
    setUrl(newUrl);

    if (!newUrl.trim()) {
      setError(null);
      setIsValid(false);
      return;
    }

    const videoId = getVideoId(newUrl);
    console.log("Video ID:", videoId);
    
    if (validateYouTubeUrl(newUrl) && videoId) {
      console.log("URL is valid");
      setError(null);
      setIsValid(true);
    } else {
      console.log("URL is invalid");
      setError("Invalid YouTube URL");
      setIsValid(false);
    }
  };

  const handleGenerate = async () => {
    if (!url) {
      setError("Please enter a valid YouTube URL");
      return;
    }

    if (!isValid) {
      setError("Invalid YouTube URL");
      return;
    }

    setError(null);

    const videoId = getVideoId(url);
    if (!videoId) {
      setError("Invalid YouTube URL");
      return;
    }

    setIsLoading(true);

    try {
      const result = await CreatePowerpoint(videoId);
      if (!result.success || !result.filePath) {
        toast({
          title: "Something went wrong",
          description: result.error || "Please try again later",
          variant: "destructive",
        });
      } else {
        // Download the generated file
        const fileName = result.filePath.split('/').pop();
        const link = document.createElement('a');
        link.href = `/${fileName}`;
        link.download = fileName || 'presentation.pptx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast({
          title: "Success!",
          description: "Your presentation has been generated",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient">
      <MaxWidthWrapper>
        <div className="max-w-3xl mx-auto pt-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Create beautiful presentations{" "}
            <span className="block text-lg font-normal text-gray-600 mt-2">
              Transform any YouTube video into a professional PowerPoint
            </span>
          </h1>
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8">
            {isValid ? (
              <div className="mb-8 aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${getVideoId(url)}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                />
              </div>
            ) : (
              <div className="mb-8 aspect-video bg-gray-50 rounded-xl flex flex-col items-center justify-center text-gray-500">
                <VideoIcon className="w-16 h-16 mb-4 text-gray-400" />
                <p>Enter a YouTube URL to get started.</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="url"
                  placeholder="Paste YouTube URL here"
                  value={url}
                  onChange={handleUrlChange}
                  className="w-full h-10 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
              <Button
                onClick={handleGenerate}
                disabled={!isValid || isLoading}
                className="h-10 px-6 bg-violet-600 hover:bg-violet-700 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Creating presentation...
                  </>
                ) : (
                  "Create presentation"
                )}
              </Button>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}
            <p className="text-center text-sm text-gray-500 mt-4">
              Supported formats: YouTube video URLs (e.g.,
              https://youtube.com/watch?v=...)
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
