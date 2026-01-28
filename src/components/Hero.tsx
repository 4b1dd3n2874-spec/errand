import { Sparkles, ArrowDown } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="gradient-hero min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Hackathon Project 2025</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
          Plan Smarter,{" "}
          <span className="text-gradient">Get More Done</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Errand Optimizer helps you organize and prioritize your daily tasks efficiently. 
          Stop wasting time deciding what to do first — let us help you plan the perfect route.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onGetStarted} className="btn-primary flex items-center gap-2">
            Start Organizing
            <ArrowDown className="w-4 h-4" />
          </button>
          <a 
            href="#features" 
            className="btn-secondary"
          >
            Learn More
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success" />
            <span>Free to use</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Built with React</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Simple & Effective</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
