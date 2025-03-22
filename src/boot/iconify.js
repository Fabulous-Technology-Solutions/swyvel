import { defineBoot } from '#q-app/wrappers';
import { Icon } from '@iconify/vue';

export default defineBoot(({ app }) => {
  // Register Iconify Vue component globally
  app.component('IconComp', Icon);
});
