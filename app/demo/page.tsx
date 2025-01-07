"use client";

import MaxWidthWrapper from "../../components/common/MaxWidthWrapper";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { ChevronLeft, ChevronRight, Download, Loader2, AlertCircle, Send, Presentation } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import pptxgen from "pptxgenjs";

interface Slide {
  title: string;
  content: string[];
  bgColor: string;
  textColor: string;
}

interface Message {
  role: string;
  content: string;
}

interface ChatResponse {
  text: string;
  error?: string;
}

const colorCombos = [
  { bg: "from-violet-500 to-purple-600", text: "text-white" },
  { bg: "from-blue-500 to-indigo-600", text: "text-white" },
  { bg: "from-emerald-500 to-teal-600", text: "text-white" },
  { bg: "from-cyan-500 to-blue-600", text: "text-white" },
  { bg: "from-rose-500 to-pink-600", text: "text-white" },
  { bg: "from-amber-500 to-orange-600", text: "text-white" },
  { bg: "from-purple-500 to-indigo-600", text: "text-white" },
  { bg: "from-green-500 to-emerald-600", text: "text-white" },
];

export default function DemoPage() {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate response');
      }

      const data: ChatResponse = await response.json();
      
      if (!data.text) {
        throw new Error('Invalid response format');
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
      
      // Parse presentation content if it contains slides
      if (data.text.includes('Title Slide') || data.text.includes('Slide')) {
        const slideTexts: string[] = data.text.split('\n\n').filter((text: string) => text.trim());
        const parsedSlides = slideTexts.map((slideText: string, index: number) => {
          const lines: string[] = slideText.split('\n').filter((line: string) => line.trim());
          const title = lines[0].replace(/^[IVX]+\.\s*/, '');
          const content = lines.slice(1)
            .map((line: string) => line.trim())
            .map((line: string) => line.replace(/^[A-Z]\.\s*/, ''))
            .map((line: string) => line.replace(/^\d+\.\s*/, ''))
            .map((line: string) => line.replace(/^[-•]\s*/, ''));

          const colorIndex = index % colorCombos.length;

          return {
            title,
            content,
            bgColor: colorCombos[colorIndex].bg,
            textColor: colorCombos[colorIndex].text
          };
        });

        setSlides(parsedSlides);
      }
    } catch (error: any) {
      console.error("Error generating response:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to generate response. Please try again.",
        variant: "destructive",
      });
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const generatePresentation = () => {
    const lastAssistantMessage = messages.findLast(msg => msg.role === "assistant");
    if (!lastAssistantMessage) {
      toast({
        title: "No content available",
        description: "Please chat with the AI first to generate presentation content.",
        variant: "destructive",
      });
      return;
    }

    const text = lastAssistantMessage.content;
    if (!text.includes('Title Slide') && !text.includes('Slide')) {
      toast({
        title: "No presentation format detected",
        description: "Please ask the AI to generate a presentation outline first.",
        variant: "destructive",
      });
      return;
    }

    // Parse presentation content
    const slideTexts: string[] = text.split('\n\n').filter((text: string) => text.trim());
    const parsedSlides = slideTexts.map((slideText: string, index: number) => {
      const lines: string[] = slideText.split('\n').filter((line: string) => line.trim());
      const title = lines[0].replace(/^[IVX]+\.\s*/, '');
      const content = lines.slice(1)
        .map((line: string) => line.trim())
        .map((line: string) => line.replace(/^[A-Z]\.\s*/, ''))
        .map((line: string) => line.replace(/^\d+\.\s*/, ''))
        .map((line: string) => line.replace(/^[-•]\s*/, ''));

      const colorIndex = index % colorCombos.length;

      return {
        title,
        content,
        bgColor: colorCombos[colorIndex].bg,
        textColor: colorCombos[colorIndex].text
      };
    });

    setSlides(parsedSlides);
    setCurrentSlide(0);
    
    // Scroll to the top where the presentation is displayed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadPPT = async () => {
    const pres = new pptxgen();

    pres.author = 'SlideGen AI';
    pres.company = 'SlideGen';
    pres.revision = '1';
    pres.subject = 'AI Generated Presentation';

    slides.forEach((slide) => {
      const pptSlide = pres.addSlide();

      const bgColor = slide.bgColor.split(' ')[1].replace('to-', '');
      pptSlide.background = { color: bgColor.replace('-600', '') };

      pptSlide.addText(slide.title, {
        x: '5%',
        y: '5%',
        w: '90%',
        h: '15%',
        fontSize: 44,
        color: 'FFFFFF',
        bold: true,
        align: 'center',
      });

      slide.content.forEach((point, idx) => {
        pptSlide.addText(point, {
          x: '10%',
          y: `${25 + (idx * 12)}%`,
          w: '80%',
          h: '10%',
          fontSize: 24,
          color: 'FFFFFF',
          bullet: true,
        });
      });
    });

    pres.writeFile({ fileName: 'SlideGen-Presentation.pptx' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-12">
      <MaxWidthWrapper className="max-w-[90%] xl:max-w-[1400px]">
        <div className="mx-auto space-y-8">
          {slides.length > 0 ? (
            <>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-500">
                    Slide {currentSlide + 1} of {slides.length}
                  </span>
                </div>
                <Button
                  onClick={downloadPPT}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PowerPoint
                </Button>
              </div>

              <div className={`
                rounded-xl shadow-2xl p-16 aspect-[16/9] relative overflow-hidden
                bg-gradient-to-br ${slides[currentSlide].bgColor}
                transition-colors duration-500
              `}>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-16 w-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md pointer-events-auto transition-all duration-200 text-white"
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft className="h-10 w-10" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-16 w-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md pointer-events-auto transition-all duration-200 text-white"
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                  >
                    <ChevronRight className="h-10 w-10" />
                  </Button>
                </div>
                
                <div className={`
                  h-full flex flex-col justify-center relative z-10
                  transform transition-transform duration-500 ease-out
                  ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}
                `}>
                  <h2 className={`text-7xl font-bold text-center mb-16 ${slides[currentSlide].textColor} drop-shadow-lg`}>
                    {slides[currentSlide].title}
                  </h2>
                  <div className="space-y-10">
                    {slides[currentSlide].content.map((point: string, index: number) => (
                      <div
                        key={index}
                        className={`
                          flex items-center space-x-6 text-2xl ${slides[currentSlide].textColor}
                          transform transition-all duration-500 delay-${index * 100}
                          ${isAnimating ? 'translate-x-10 opacity-0' : 'translate-x-0 opacity-100'}
                        `}
                      >
                        <div className="w-4 h-4 rounded-full bg-white/80 flex-shrink-0 shadow-lg" />
                        <p className="text-white/90 drop-shadow">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-4">
                  {slides.map((_: any, index: number) => (
                    <button
                      key={index}
                      className={`
                        w-3 h-3 rounded-full transition-all duration-300
                        ${index === currentSlide ? 'bg-white w-10' : 'bg-white/50 hover:bg-white/70'}
                      `}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true);
                          setCurrentSlide(index);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold text-gray-800">No presentation yet</h2>
              <p className="mt-4 text-xl text-gray-600">Start a conversation below to generate your presentation</p>
            </div>
          )}

          {/* AI Chat Section */}
          <Card className="p-8 shadow-xl bg-white/95 backdrop-blur-sm">
            <div className="space-y-4 mb-6 max-h-[500px] overflow-y-auto">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 py-12">
                  <AlertCircle className="h-16 w-16 mx-auto mb-6 text-violet-400" />
                  <p className="text-xl">Start a conversation about your presentation!</p>
                </div>
              )}
              {messages.map((message: Message, index: number) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${
                    message.role === "user"
                      ? "bg-violet-100 ml-16"
                      : "bg-gray-100 mr-16"
                  } transform transition-all duration-200 hover:scale-[1.02]`}
                >
                  <div className="font-semibold mb-2 text-base text-gray-600">
                    {message.role === "user" ? "You" : "Assistant"}
                  </div>
                  <div className="text-gray-800 whitespace-pre-wrap text-lg">
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-center items-center py-6">
                  <div className="flex items-center space-x-3 text-violet-600">
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <span className="text-lg">Generating response...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about your presentation..."
                  className="flex-1 text-lg p-6"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-violet-600 hover:bg-violet-700 text-white transition-colors px-8"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </form>

              {messages.length > 0 && (
                <Button
                  onClick={generatePresentation}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold"
                >
                  <Presentation className="h-6 w-6 mr-3" />
                  Generate Presentation from Chat
                </Button>
              )}
            </div>
          </Card>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
