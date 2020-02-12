import React from "react";
import { useEffect } from "@storybook/client-api";
// Global Data
import globalDataImages from "sous-components-twig/_global-data/images.yml";

import heroTwig from "sous-components-twig/02-molecules//hero/hero.twig";

import heroData from "sous-components-twig/02-molecules//hero/hero.yml";

import "sous-components-twig/01-atoms/images/background-image/background-image";

/**
 * Storybook Definition.
 */
export default { title: "Molecules/Heroes" };

export const hero = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: heroTwig({ ...globalDataImages, ...heroData })
      }}
    />
  );
};
