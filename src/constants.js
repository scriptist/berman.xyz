import Contact from './components/section/Contact.vue';
import Experience from './components/section/Experience.vue';
import FTIC from './components/section/FTIC.vue';
import Welcome from './components/section/Welcome.vue';
import Work from './components/section/Work.vue';

export const Sections = new Map([
  ['WELCOME', Welcome],
  ['EXPERIENCE', Experience],
  ['WORK', Work],
  ['FTIC', FTIC],
  ['CONTACT', Contact],
]);

export const SectionKeys = Array.from(Sections.keys());
