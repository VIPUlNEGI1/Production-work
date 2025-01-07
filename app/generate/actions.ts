"use server";
import pptxgen from "pptxgenjs";
import path from "path";
import { randomUUID } from "crypto";

type PowerPointResult = {
  success: boolean;
  filePath?: string;
  error?: string;
};

export async function CreatePowerpoint(videoId: string): Promise<PowerPointResult> {
  try {
    // Create a dummy presentation
    const pptx = new pptxgen();

    // Title slide
    const titleSlide = pptx.addSlide();
    titleSlide.background = { color: "#FFFFFF" };

    titleSlide.addText("Demo Presentation", {
      x: 0,
      y: "40%",
      w: "100%",
      h: 1,
      fontSize: 33,
      bold: true,
      color: "003366",
      align: "center",
      fontFace: "Helvetica",
    });

    titleSlide.addText("Generated from YouTube video", {
      x: 0,
      y: "58%",
      w: "100%",
      h: 0.75,
      fontSize: 18,
      color: "888888",
      align: "center",
      fontFace: "Helvetica",
    });

    // Content slides
    const slides = [
      {
        title: "Introduction",
        content: [
          "Welcome to this demo presentation",
          "Generated using SlideGen",
          "Based on YouTube content"
        ]
      },
      {
        title: "Key Points",
        content: [
          "Automatically extracts content from videos",
          "Creates professional slides",
          "Easy to use interface"
        ]
      },
      {
        title: "Features",
        content: [
          "Clean and modern design",
          "Consistent formatting",
          "Downloadable PowerPoint files"
        ]
      }
    ];

    slides.forEach(({ title, content }) => {
      const slide = pptx.addSlide();
      slide.addText(title, {
        x: 0.5,
        y: 0.5,
        w: 8.5,
        h: 1,
        fontSize: 32,
        bold: true,
        color: "003366",
        align: "center",
        fontFace: "Arial",
      });

      content.forEach((bullet, index) => {
        slide.addText(bullet, {
          x: 1,
          y: 1.8 + index * 1,
          w: 8,
          h: 0.75,
          fontSize: 15,
          color: "333333",
          align: "left",
          fontFace: "Arial",
          bullet: true,
        });
      });
    });

    // Save the presentation
    const fileName = `presentation-${randomUUID()}.pptx`;
    const filePath = path.join(process.cwd(), "public", fileName);

    await pptx.writeFile({ fileName: filePath });

    return {
      success: true,
      filePath
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create powerpoint"
    };
  }
}
