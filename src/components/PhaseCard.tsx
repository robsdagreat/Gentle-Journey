import React from 'react';
import { Phase } from '../types/roadmap';
import WeekSection from './WeekSection';

type Props = {
  phase: Phase;
  expanded: boolean;
  onToggle: (id: string) => void;
  getStatusIcon: (id: string) => React.ReactNode;
};

const PhaseCard = ({ phase, expanded, onToggle, getStatusIcon }: Props) => {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <div
        className={`bg-gradient-to-r ${phase.color} p-6 cursor-pointer`}
        onClick={() => onToggle(phase.id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {getStatusIcon(phase.id)}
            <div>
              <h2 className="text-2xl font-bold">{phase.title}</h2>
              <p className="text-white/80 mt-1">{phase.subtitle}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-white/80">Duration</p>
                <p className="font-bold text-lg">{phase.duration}</p>
              </div>
              <div>
                <p className="text-sm text-white/80">Revenue Goal</p>
                <p className="font-bold text-lg">{phase.revenue}</p>
              </div>
              <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                phase.priority === 'CRITICAL' ? 'bg-red-500' :
                phase.priority === 'HIGH' ? 'bg-orange-500' :
                phase.priority === 'MEDIUM' ? 'bg-yellow-500' :
                'bg-blue-500'
              }`}>
                {phase.priority}
              </div>
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="p-6">
          {phase.weeks.map((week, weekIndex) => (
            <WeekSection key={weekIndex} week={week} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhaseCard;
