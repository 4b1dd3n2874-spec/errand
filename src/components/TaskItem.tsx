import { Check, Trash2, MapPin, Clock } from "lucide-react";

export interface Task {
  id: string;
  title: string;
  location?: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  estimatedTime?: string;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  const priorityLabels = {
    high: "High",
    medium: "Medium",
    low: "Low",
  };

  return (
    <div
      className={`task-card animate-scale-in ${task.completed ? "task-completed" : ""}`}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggle(task.id)}
          className={`check-circle mt-0.5 flex-shrink-0 ${task.completed ? "checked animate-check" : ""}`}
        >
          {task.completed && <Check className="w-4 h-4 text-primary-foreground" />}
        </button>

        <div className="flex-1 min-w-0">
          <h3 className={`task-title font-medium text-foreground ${task.completed ? "line-through text-muted-foreground" : ""}`}>
            {task.title}
          </h3>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            {task.location && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                <span>{task.location}</span>
              </div>
            )}
            {task.estimatedTime && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>{task.estimatedTime}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`priority-badge priority-${task.priority}`}>
            {priorityLabels[task.priority]}
          </span>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-muted-foreground hover:text-destructive transition-colors rounded-lg hover:bg-destructive/10"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
