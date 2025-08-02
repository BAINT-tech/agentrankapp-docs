import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'AgentRank Ecosystem',
      items: [
        'how-to-create-agent',
        'verifying-badges',
        'voting-system-guide',
      ],
    },
  ],
};

export default sidebars;


