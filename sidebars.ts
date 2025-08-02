import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'AgentRank Ecosystem',
      items: [
        'how-to-create-agent',
        'verifying-badges',
        'voting-system-guide',
        'agent-profile',
        'agent-leaderboard',
        'analytics-dashboard',
        'community-rules',
        'faq',
      ],
    },
  ],
};

export default sidebars;


