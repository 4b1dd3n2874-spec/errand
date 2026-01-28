import { Heart, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-accent fill-accent" />
          <span>at Hackathon 2025</span>
        </div>

        <div className="text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground">Errand Optimizer</span>
          {" "}— A step toward smarter daily planning
        </div>

        <a
          href="#"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <Github className="w-4 h-4" />
          <span>View on GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
