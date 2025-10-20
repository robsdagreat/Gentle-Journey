import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Task } from '../types/roadmap';

type Props = { task: Task };

const TaskCard = ({ task }: Props) => (
  <div className="bg-slate-750 rounded-lg p-4 border border-slate-600">
    <div className="flex items-start justify-between mb-3">
      <h4 className="text-lg font-semibold text-blue-300">{task.title}</h4>
      <div className="flex items-center gap-3 text-sm">
        <span className="text-slate-400">{task.owner}</span>
        <span className="bg-slate-700 px-3 py-1 rounded">{task.hours}h</span>
      </div>
    </div>
    <ul className="space-y-2">
      {task.items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-300">
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TaskCard;
