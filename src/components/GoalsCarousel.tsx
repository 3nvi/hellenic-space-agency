import React from 'react';
import Fade from 'react-reveal/Fade';
import { MarkdownRemarkFrontmatterElGoals as Goal } from '../../graphql-types';

interface GoalsCarouselProps {
  goals: Goal[];
}

const GoalsCarousel: React.FC<GoalsCarouselProps> = ({ goals }) => {
  const [goalIndex, setGoalIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setGoalIndex((goalIndex + 1) % 6);
    }, 7500);

    return () => clearInterval(interval);
  }, [goalIndex, setGoalIndex]);

  const goal = goals[goalIndex];
  return (
    <Fade delay={200}>
      <section className="align-center">
        <h3>{goal.title}</h3>
        <p>{goal.details}</p>
      </section>
    </Fade>
  );
};

export default GoalsCarousel;
