import React from "react";

import cta from "sous-components-twig/02-molecules/cta/cta.twig";

import ctaData from "sous-components-twig/02-molecules/cta/cta.yml";

/**
 * Storybook Definition.
 */
export default { title: "Molecules/CTA" };

export const ctaExample = () => (
  <div dangerouslySetInnerHTML={{ __html: cta(ctaData) }} />
);
