import { CheckCircle2, Circle, TrendingUp } from "lucide-react";
import type { Task } from "./TaskItem";

interface StatsBarProps {
  tasks: Task[];
}

const StatsBar = ({ tasks }: StatsBarProps) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="grid grid-cols-3 gap-4 animate-fade-in">
      <div className="stat-card">
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl bg-primary/10">
          <Circle className="w-5 h-5 text-primary" />
        </div>
        <div className="text-2xl font-display font-bold text-foreground">{pendingTasks}</div>
        <div className="text-sm text-muted-foreground">Pending</div>
      </div>

      <div className="stat-card">
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl bg-success/10">
          <CheckCircle2 className="w-5 h-5 text-success" />
        </div>
        <div className="text-2xl font-display font-bold text-foreground">{completedTasks}</div>
        <div className="text-sm text-muted-foreground">Completed</div>
      </div>

      <div className="stat-card">
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl bg-accent/10">
          <TrendingUp className="w-5 h-5 text-accent" />
        </div>
        <div className="text-2xl font-display font-bold text-foreground">{completionRate}%</div>
        <div className="text-sm text-muted-foreground">Progress</div>
      </div>
    </div>
  );
};

export default StatsBar;
