import React, { useEffect, useState } from 'react';
import { InfoCard } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';

function parseGitHubUrl(repoUrl: string): { owner: string; repo: string } | null {
  try {
    const url = new URL(repoUrl);
    const parts = url.pathname.split('/').filter(Boolean);

    if (parts.length < 2 || url.hostname !== 'github.com') {
      return null;
    }
    const owner = parts[0];
    const repo = parts[1];
    return { owner, repo };
  } catch (e) {
    return null;
  }
}

export const SfstCard = () => {
    const { entity } = useEntity();
    const [stars, setStars] = useState<number | null>(null);
    const [github, setGithub] = useState<boolean>(false);

    useEffect(() => {
      const fetchStars = async () => {
        const sourceLocation = entity?.metadata.annotations?.['backstage.io/source-location'];
        const sanitizedSource = sourceLocation?.replace(/^url:/, '');
        const projectSlug = sanitizedSource ? parseGitHubUrl(sanitizedSource) : null;

        if (projectSlug) {
          const response = await fetch(`https://api.github.com/repos/${projectSlug}`, {
            headers: {
            },
          });
          const data = await response.json();
          setStars(data.stargazers_count);
          setGithub(true);
        }
      };

      fetchStars();
    }, [entity]);

    if(!github) {
      return null;
    }

    return (
        <InfoCard title="GitHub Stars">
          {stars !== null ? `⭐ ${stars}` : 'Loading...'}
        </InfoCard>
    );
}

