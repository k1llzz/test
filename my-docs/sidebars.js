// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Agents',
      items: [
        'agents/ai_apy-pool_agent',
        'agents/ai_avatar',
        'agents/ai_dialogue_manager',
        'agents/ai_predicts_manager',
        'agents/ai_smm_manager',
        'agents/ai_twitter_summary',
        'agents/apy_agent',
        'agents/base_agent',
        'agents/creativity_agent',
        'agents/dialogue_manager',
        'agents/example-agent',
        'agents/follow_unfollow_bot',
        'agents/kol_agent',
        'agents/persona_agent',
        'agents/solana_new_pairs_agent',
        'agents/telegram_listener_agent',
        'agents/tik_tok_agent',
        'agents/twitter_ambassador_commentator',
        'agents/twitter_ambassador_comments_answerer',
        'agents/twitter_ambassador_gorilla_marketing',
        'agents/twitter_ambassador_mention_answerer',
        'agents/twitter_ambassador_posting_agent',
        'agents/twitter_echo_bot',
        'agents/twitter_liker_agent',
        'agents/twitter_summary_agent',
        'agents/wallet_tracker_agent',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/agents',
        'core-concepts/d2A',
        'core-concepts/knowledge',
        'core-concepts/orchestration',
        'core-concepts/overview',
        'core-concepts/plugins',
        'core-concepts/providers',
        'core-concepts/tools',
        'core-concepts/workflows',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'category',
          label: 'Agent',
          items: ['getting-started/agent/quickstart'],
        },
        {
          type: 'category',
          label: 'Provider',
          items: ['getting-started/provider/quickstart'],
        },
        {
          type: 'category',
          label: 'Tool',
          items: [
            'getting-started/tool/quickstart',
            'getting-started/tool/contributing',
            'getting-started/tool/faq',
            'getting-started/tool/quickstart',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Services',
      items: [
        {
          type: 'category',
          label: 'AI Registry',
          items: ['services/ai-registry/ai-registry', 'services/ai-registry/overview'],
        },
        {
          type: 'category',
          label: 'Relay Service',
          items: ['services/relay-service/overview', 'services/relay-service/relay'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        'tools/airdrop_bot',
        'tools/arbitrage_bot',
        'tools/handoff_tool',
        'tools/openai_request',
        'tools/provider_contract_tool',
        'tools/provider_query_tool',
        'tools/provider_subscribe_tool_async',
        'tools/query_knowledge_tool',
        'tools/redis_client',
        'tools/return_answer_tool',
        'tools/save-knowledge-tool',
      ],
    },
  ],
};

export default sidebars;
