import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Header } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,Header],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  experience = [
    {
      company: 'Alsoug | Cashi',
      role: 'Senior Front-End Developer',
      period: '2020/08 — Present',
      location: 'Cairo, Egypt',
      description: 'Leading frontend initiatives for major platforms, focusing on performance optimization and scalable architecture.',
      highlights: [
        'Improved website performance by 100% (2x) by implementing Parcel.js and Webpack.',
        'Engineered 3 distinct Content Management Systems (CMS) using React.js, Angular, and Native JS/PHP.',
        'Collaborated with mobile teams to develop high-performance Responsive WebViews.',
        'Maintained and optimized legacy CMS architectures.'
      ]
    },
    {
      company: 'Media Gate Studios',
      role: 'Front-End Developer',
      period: '2019/01 — 2020/05',
      location: 'Zamalek, Egypt',
      description: 'Developed and deployed UI for multiple high-traffic web platforms.',
      highlights: [
        'Took ownership of the 26Hashtags Award website (Full-Stack: PHP & MySQL).',
        'Modernized legacy projects to React.js and ES6+ while maintaining Angular 15 support.',
        'Built interactive, data-driven interfaces using AJAX and third-party APIs (Google Maps, Social Auth).',
        'Tech Stack: React.js, Angular, JavaScript (ES6+), PHP, MySQL, jQuery.'
      ]
    },
    {
      company: 'Pure Vision Egypt',
      role: 'Front-End Developer',
      period: '2018/06 — 2019/01',
      location: 'Maadi, Egypt',
      description: 'Responsible for developing UI for Pure Vision websites.',
      highlights: [
        'Developed responsive UIs using HTML, CSS, and JavaScript.',
        'Focused on clean implementation of design requirements.'
      ]
    }
  ];

  skillCategories = [
    {
      title: 'Frameworks & Libraries',
      skills: ['Angular 19', 'React.js', 'Nuxt.js', 'jQuery', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Languages & Core',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 (SCSS)', 'JavaScript OOP', 'AJAX']
    },
    {
      title: 'Backend & Tools',
      skills: ['PHP', 'MySQL', 'Laravel', 'Webpack', 'Parcel.js', 'NPM', 'Yarn', 'GIT']
    },
    {
      title: 'Specialized',
      skills: ['Google Maps APIs', 'qwen-code CLI', 'CMS Engineering', 'Responsive WebViews']
    }
  ];
}