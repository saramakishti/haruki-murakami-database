import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  head: (
    <>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:title' content='Haruki Murakami Database' />
      <meta
        name='description'
        content='Website to find all pop culture references mentioned in Haruki Murakami works.'
      />
      <meta name='author' content='Sara Makishti' />
      <meta
        property='og:url'
        content='https://haruki-murakami-database.vercel.app/'
      />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-8TXCP6MZHB'
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8TXCP6MZHB', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  ),
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
