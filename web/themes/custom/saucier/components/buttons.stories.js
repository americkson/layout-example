import React from "react";

import button from "sous-components-twig/01-atoms/buttons/button.twig";

import buttonData from "sous-components-twig/01-atoms/buttons/button.yml";
import buttonAltData from "sous-components-twig/01-atoms/buttons/button-alt.yml";
import buttonAlt2Data from "sous-components-twig/01-atoms/buttons/button-alt2.yml";

/**
 * Storybook Definition.
 */
export default { title: "Atoms/Buttons" };

export const All = () => (
  <>
    <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />
    <br />
    <div dangerouslySetInnerHTML={{ __html: button(buttonAltData) }} />
    <br />
    <div dangerouslySetInnerHTML={{ __html: button(buttonAlt2Data) }} />
  </>
);
export const Default = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />
);
export const alt = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonAltData) }} />
);
export const alt2 = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonAlt2Data) }} />
);
