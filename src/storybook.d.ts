import '@storybook/types';
import type { ReactRouterAddonStoryParameters } from 'storybook-addon-remix-react-router';

declare module '@storybook/types' {
  interface Parameters {
    reactRouter?: ReactRouterAddonStoryParameters;
    // CSS selectors for storybook-addon-pseudo-states
    pseudo?: {
      hover?: PseudoSelector;
      active?: PseudoSelector;
      focusVisible?: PseudoSelector;
      focusWithin?: PseudoSelector;
      focus?: PseudoSelector;
      visited?: PseudoSelector;
      link?: PseudoSelector;
      target?: PseudoSelector;
      rootSelector?: string;
    };
  }

  type PseudoSelector = true | string | string[];
}
