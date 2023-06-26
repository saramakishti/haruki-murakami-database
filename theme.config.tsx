import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Haruki Murakami Database',
    };
  },
  logo: <span>Haruki Murakami | Complete References Collection</span>,
  banner: {
    key: '1.0-release',
    dismissible: true,
    text: (
      <a href='/status'>
        🎉 Recently Launched! Go to Status to see added references →
      </a>
    ),
  },
  project: {
    link: 'https://github.com/saramakishti/haruki-murakami-database',
  },
  chat: {},
  docsRepositoryBase:
    'https://github.com/saramakishti/haruki-murakami-database',
  footer: {
    text: (
      <span>
        <a href='/novels/kafka_on_the_shore' target='_blank'>
          <i>
            If you remember me, then I don't care if everyone else forgets. -
            Kafka on the Shore
          </i>
        </a>
      </span>
    ),
  },
  search: {
    placeholder: 'Search database...',
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    float: true,
  },
  editLink: {
    text: null,
  },
};

export default config;
