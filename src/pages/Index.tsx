import { useState } from 'react';
import FlowDiagram from '@/components/FlowDiagram';
import Level2Diagram from '@/components/Level2Diagram';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentLevel, setCurrentLevel] = useState<1 | 2>(1);

  return (
    <div className="relative">
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <Button
          variant={currentLevel === 1 ? 'default' : 'outline'}
          onClick={() => setCurrentLevel(1)}
          className="gap-2"
        >
          <Icon name="Layers" size={16} />
          Уровень 1
        </Button>
        <Button
          variant={currentLevel === 2 ? 'default' : 'outline'}
          onClick={() => setCurrentLevel(2)}
          className="gap-2"
        >
          <Icon name="Grid3x3" size={16} />
          Уровень 2
        </Button>
      </div>
      
      {currentLevel === 1 ? <FlowDiagram /> : <Level2Diagram />}
    </div>
  );
};

export default Index;