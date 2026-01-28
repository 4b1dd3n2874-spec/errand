import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TaskItem, { Task } from "@/components/TaskItem";
import AddTaskForm from "@/components/AddTaskForm";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";
import { ListChecks, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Buy groceries for the week",
    location: "Supermarket",
    priority: "high",
    completed: false,
    estimatedTime: "45 min",
  },
  {
    id: "2",
    title: "Pick up dry cleaning",
    location: "Downtown Cleaners",
    priority: "medium",
    completed: false,
    estimatedTime: "15 min",
  },
  {
    id: "3",
    title: "Return library books",
    location: "Central Library",
    priority: "low",
    completed: true,
    estimatedTime: "20 min",
  },
  {
    id: "4",
    title: "Schedule dentist appointment",
    priority: "high",
    completed: false,
    estimatedTime: "10 min",
  },
];

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const taskSectionRef = useRef<HTMLDivElement>(null);

  const handleToggle = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleAdd = (newTask: Omit<Task, "id" | "completed">) => {
    const task: Task = {
      ...newTask,
      id: Date.now().toString(),
      completed: false,
    };
    setTasks((prev) => [task, ...prev]);
  };

  const scrollToTasks = () => {
    taskSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify(tasks, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "errands.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const pendingTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className="min-h-screen bg-background">
      <Hero onGetStarted={scrollToTasks} />
      
      <Features />

      <section ref={taskSectionRef} className="py-20 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <ListChecks className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Your Errands
                </h2>
                <p className="text-muted-foreground text-sm">
                  Manage and organize your daily tasks
                </p>
              </div>
            </div>
            <Button onClick={handleDownload} variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>

          <StatsBar tasks={tasks} />

          <div className="mt-8">
            <AddTaskForm onAdd={handleAdd} />
          </div>

          {pendingTasks.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Pending ({pendingTasks.length})
              </h3>
              <div className="space-y-3">
                {pendingTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          )}

          {completedTasks.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Completed ({completedTasks.length})
              </h3>
              <div className="space-y-3">
                {completedTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          )}

          {tasks.length === 0 && (
            <div className="mt-8 text-center py-12 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <ListChecks className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No errands yet</h3>
              <p className="text-muted-foreground text-sm">
                Add your first errand to get started!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
