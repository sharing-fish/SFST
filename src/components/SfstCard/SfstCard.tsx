import React, { useEffect, useState } from 'react';
import { InfoCard } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';

export const SfstCard = () => {
    const { entity } = useEntity();
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
      const fetchStars = async () => {
        const projectSlug = entity?.metadata.annotations?.['github.com/project-slug'];
        if (projectSlug) {
          const response = await fetch(`https://api.github.com/repos/${projectSlug}`, {
            headers: {
            },
          });
          const data = await response.json();
          setStars(data.stargazers_count);
        }
      };
  
      fetchStars();
    }, [entity]);
  
    return (
      <InfoCard title="GitHub Stars">
        {stars !== null ? `⭐ ${stars}` : 'Loading...'}
      </InfoCard>
    );
    
}

