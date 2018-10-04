// Content
import ContactSection from './components/section/Contact.vue';
import ExperienceSection from './components/section/Experience.vue';
import FTICSection from './components/section/FTIC.vue';
import WelcomeSection from './components/section/Welcome.vue';
import WorkSection from './components/section/Work.vue';

// Images
import ContactImage from './assets/layers/Contact.svg';
import ExperienceImage from './assets/layers/Experience.svg';
import FTICImage from './assets/layers/FTIC.svg';
import WelcomeImage from './assets/layers/Welcome.svg';
import WorkImage from './assets/layers/Work.svg';

export const Sections = new Map([
  [
    'WELCOME',
    {
      color: '#eb8d4e',
      content: WelcomeSection,
      image: WelcomeImage,
    },
  ],
  [
    'EXPERIENCE',
    {
      color: 'orange',
      content: ExperienceSection,
      image: ExperienceImage,
    },
  ],
  [
    'WORK',
    {
      color: '#eb8d4e',
      content: WorkSection,
      image: WorkImage,
    },
  ],
  [
    'FTIC',
    {
      color: 'orange',
      content: FTICSection,
      image: FTICImage,
    },
  ],
  [
    'CONTACT',
    {
      color: '#eb8d4e',
      content: ContactSection,
      image: ContactImage,
    },
  ],
]);

export const SectionKeys = Array.from(Sections.keys());
