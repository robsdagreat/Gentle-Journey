import React from 'react';
import { Week } from '../types/roadmap';
import TaskCard from './TaskCard';

type Props = { week: Week };

const WeekSection = ({ week }: Props) => (
  <div className="mb-8 last:mb-0">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">{week.week}</div>
      <div>
        <h3 className="text-xl font-bold">{week.title}</h3>
        <p className="text-slate-400">{week.goal}</p>
      </div>
    </div>

    <div className="grid gap-4 ml-4">
      {week.tasks.map((task, idx) => (
        <TaskCard key={idx} task={task} />
      ))}
    </div>
  </div>
);

export default WeekSection;
