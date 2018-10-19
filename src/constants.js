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

// Images
import ContactIcon from './assets/icons/Contact.svg';
import ExperienceIcon from './assets/icons/Experience.svg';
import FTICIcon from './assets/icons/FTIC.svg';
import WorkIcon from './assets/icons/Work.svg';

export const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const Sections = new Map([
  [
    'WELCOME',
    {
      color: '#eb8d4e',
      content: WelcomeSection,
      image: WelcomeImage,
      title: 'Mike Berman',
    },
  ],
  [
    'EXPERIENCE',
    {
      color: 'orange',
      content: ExperienceSection,
      icon: ExperienceIcon,
      image: ExperienceImage,
      title: 'Experience',
    },
  ],
  [
    'WORK',
    {
      color: '#eb8d4e',
      content: WorkSection,
      icon: WorkIcon,
      image: WorkImage,
      title: 'Work',
    },
  ],
  [
    'FTIC',
    {
      color: 'orange',
      content: FTICSection,
      icon: FTICIcon,
      image: FTICImage,
      title: 'Find the Invisible Cow',
    },
  ],
  [
    'CONTACT',
    {
      color: '#eb8d4e',
      content: ContactSection,
      icon: ContactIcon,
      image: ContactImage,
      title: 'Contact',
    },
  ],
]);

export const SectionKeys = Array.from(Sections.keys());
