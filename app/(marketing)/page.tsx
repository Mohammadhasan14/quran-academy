import { Hero } from "@/components/sections/home/Hero";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { GirihDivider } from "@/components/ui/GirihDivider";
import { AlphabetExplorer } from "@/components/sections/home/AlphabetExplorer";
import { TajweedWordExplorer } from "@/components/sections/home/TajweedWordExplorer";
import { VerseDemonstration } from "@/components/sections/home/VerseDemonstration";
import { MaqamGame } from "@/components/sections/home/MaqamGame";
import { MiniLesson } from "@/components/sections/home/MiniLesson";
import { AICoachingDemo } from "@/components/sections/home/AICoachingDemo";
import { LearningPaths } from "@/components/sections/home/LearningPaths";
import { SuccessStories } from "@/components/sections/home/SuccessStories";
import { MeetYourTeacher } from "@/components/sections/home/MeetYourTeacher";
import { LiveClasses } from "@/components/sections/home/LiveClasses";
import { CoursesPricingFAQ } from "@/components/sections/home/CoursesPricingFAQ";
import { ClosingCTA } from "@/components/sections/home/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <GirihDivider id="method" />
      <AlphabetExplorer />
      <TajweedWordExplorer />
      <VerseDemonstration />
      <MaqamGame />
      <MiniLesson />
      <AICoachingDemo />
      <LearningPaths />
      <SuccessStories />
      <MeetYourTeacher />
      <LiveClasses />
      <CoursesPricingFAQ />
      <ClosingCTA />
    </>
  );
}
