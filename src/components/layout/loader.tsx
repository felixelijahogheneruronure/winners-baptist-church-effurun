
import { Church } from 'lucide-react';

export default function Loader() {
  return (
    <div 
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
    >
      <div className="animate-pulse">
        <Church className="h-16 w-16 text-primary" />
      </div>
      <p className="mt-4 text-lg font-medium text-primary">
        Loading Winners Baptist Church...
      </p>
    </div>
  );
}
