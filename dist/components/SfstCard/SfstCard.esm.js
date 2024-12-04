import React, { useState, useEffect } from 'react';
import { InfoCard } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';

const SfstCard = () => {
  const { entity } = useEntity();
  const [stars, setStars] = useState(null);
  useEffect(() => {
    const fetchStars = async () => {
      const projectSlug = entity?.metadata.annotations?.["github.com/project-slug"];
      if (projectSlug) {
        const response = await fetch(`https://api.github.com/repos/${projectSlug}`, {
          headers: {}
        });
        const data = await response.json();
        setStars(data.stargazers_count);
      }
    };
    fetchStars();
  }, [entity]);
  return /* @__PURE__ */ React.createElement(InfoCard, { title: "GitHub Stars" }, stars !== null ? `\u2B50 ${stars}` : "Loading...");
};

export { SfstCard };
//# sourceMappingURL=SfstCard.esm.js.map
