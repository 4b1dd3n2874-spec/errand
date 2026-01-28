import { ListTodo, MapPin, Clock, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: ListTodo,
    title: "Task Management",
    description: "Organize your errands with an intuitive interface. Add, complete, and track all your daily tasks.",
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    description: "Add locations to your errands and optimize your route to save time and reduce travel.",
  },
  {
    icon: Clock,
    title: "Time Estimation",
    description: "Estimate how long each errand will take and plan your day more effectively.",
  },
  {
    icon: Zap,
    title: "Priority Levels",
    description: "Mark tasks as high, medium, or low priority to focus on what matters most.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built by a team that understands the challenges of daily task management.",
  },
  {
    icon: Shield,
    title: "Reliable & Clean",
    description: "A clean, functional interface designed for simplicity and reliability.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why Errand Optimizer?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We built this during a hackathon to solve a real problem — managing multiple errands efficiently without the confusion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card animate-slide-up stagger-${index + 1}`}
              style={{ opacity: 0 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
