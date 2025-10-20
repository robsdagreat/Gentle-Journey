export interface Task {
  title: string;
  items: string[];
  owner: string;
  hours: number;
}

export interface Week {
  week: string;
  title: string;
  goal: string;
  tasks: Task[];
}

export interface Phase {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  revenue: string;
  priority: string;
  color: string;
  weeks: Week[];
}
