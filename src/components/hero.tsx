import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Zap } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Header = () => (
  <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
    <Link className="flex items-center justify-center" href="#">
      <Target className="h-6 w-6 mr-2" />
      <span className="font-bold">AI Goal Board</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#features"
      >
        Features
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#cta"
      >
        Get Started
      </Link>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
    <div className="container mx-auto px-4 md:px-6 w-full">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Achieve Your Goals with AI
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Set, track, and accomplish your goals with the power of artificial
            intelligence. Your personal AI-powered goal board.
          </p>
        </div>
        <div className="space-x-4">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center text-center">
    <div className=" mb-4 text-primary shrink-0">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section
    id="features"
    className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-purple-50"
  >
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Key Features
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={<Zap size={48} />}
          title="AI-Powered Insights"
          description="Get personalized recommendations and insights to help you achieve your goals faster."
        />
        <FeatureCard
          icon={<Target size={48} />}
          title="Smart Goal Setting"
          description="Set SMART goals with AI assistance to ensure your objectives are achievable and measurable."
        />
        <FeatureCard
          icon={<CheckCircle size={48} />}
          title="Progress Tracking"
          description="Visualize your progress and stay motivated with real-time updates and analytics."
        />
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Achieve Your Goals?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Join thousands of goal-setters who are transforming their lives with
            AI-powered goal tracking.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <button className="w-full">
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs text-gray-500 dark:text-gray-400">
      © 2024 AI Goal Board. All rights reserved.
    </p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <Link className="text-xs hover:underline underline-offset-4" href="#">
        Terms of Service
      </Link>
      <Link className="text-xs hover:underline underline-offset-4" href="#">
        Privacy
      </Link>
    </nav>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
