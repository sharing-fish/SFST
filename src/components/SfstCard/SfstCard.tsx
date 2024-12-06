import React, { useEffect, useState } from 'react';
import { InfoCard } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import { useApi } from '@backstage/core-plugin-api';
import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { makeStyles, Typography, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  starCount: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  loading: {
    marginTop: theme.spacing(2),
  },
  card: {
    display: 'inline-block',
  },
}));


export const SfstCard = () => {
  const classes = useStyles();
  const { entity } = useEntity();
  const githubAuthApi = useApi(githubAuthApiRef);
  const [stars, setStars] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const projectSlug = entity?.metadata.annotations?.['github.com/project-slug'];
    if (projectSlug) {
      const fetchStars = async () => {
        try {
          const token = await githubAuthApi.getAccessToken(['repo']);
          const response = await fetch(`https://api.github.com/repos/${projectSlug}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error(`Failed to fetch stars: ${response.statusText}`);
          }
          const data = await response.json();
          setStars(data.stargazers_count);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        }
      };

      fetchStars();
    } else {
      setError('No project slug found in entity annotations');
    }
  }, [entity, githubAuthApi]);

  return (
    <InfoCard title="GitHub Stars" className={classes.card}>
      <div className={classes.cardContent}>
        {error ? (
          <Typography color="error">{error}</Typography>
        ) : stars !== null ? (
          <Typography className={classes.starCount}>⭐ {stars}</Typography>
        ) : (
          <CircularProgress className={classes.loading} />
        )}
      </div>
    </InfoCard>
  );
};