/*
 * AppSidebar Messages
 *
 * This contains all the text for the AppSidebar component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.AppSidebar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AppSidebar component!',
  },
});
