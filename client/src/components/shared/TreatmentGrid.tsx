import { TreatmentCard } from '@/components/shared/TreatmentCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Treatment {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  href?: string;
}

interface TreatmentGridProps {
  treatments: Treatment[];
  columns?: 2 | 3 | 4;
}

export function TreatmentGrid({
  treatments,
  columns = 3,
}: TreatmentGridProps) {
  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1, y: 36, start: 'top 82%' });

  return (
    <div ref={gridRef} className={`grid ${gridClass} gap-8`}>
      {treatments.map((treatment, index) => (
        <TreatmentCard
          key={treatment.id}
          title={treatment.title}
          description={treatment.description}
          image={treatment.image}
          href={treatment.href ?? `/treatments/${treatment.id}`}
          index={index}
        />
      ))}
    </div>
  );
}
