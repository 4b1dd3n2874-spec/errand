import { useState } from "react";
import { Plus, MapPin, Clock } from "lucide-react";
import type { Task } from "./TaskItem";

interface AddTaskFormProps {
  onAdd: (task: Omit<Task, "id" | "completed">) => void;
}

const AddTaskForm = ({ onAdd }: AddTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      title: title.trim(),
      location: location.trim() || undefined,
      estimatedTime: estimatedTime.trim() || undefined,
      priority,
    });

    setTitle("");
    setLocation("");
    setEstimatedTime("");
    setPriority("medium");
    setIsExpanded(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full border-2 border-dashed border-muted-foreground/40 flex items-center justify-center">
          <Plus className="w-4 h-4 text-muted-foreground" />
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          placeholder="Add a new errand..."
          className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {isExpanded && (
        <div className="mt-4 pl-9 space-y-4 animate-slide-up">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location (optional)"
                className="flex-1 bg-secondary/50 rounded-lg px-3 py-2 text-sm outline-none focus:bg-secondary"
              />
            </div>
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={estimatedTime}
                onChange={(e) => setEstimatedTime(e.target.value)}
                placeholder="Est. time (e.g., 30 min)"
                className="flex-1 bg-secondary/50 rounded-lg px-3 py-2 text-sm outline-none focus:bg-secondary"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Priority:</span>
              <div className="flex gap-1">
                {(["low", "medium", "high"] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`priority-badge priority-${p} transition-all ${
                      priority === p ? "ring-2 ring-offset-2 ring-offset-card ring-current" : "opacity-50 hover:opacity-75"
                    }`}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="btn-secondary text-sm py-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!title.trim()}
                className="btn-primary text-sm py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Errand
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default AddTaskForm;
