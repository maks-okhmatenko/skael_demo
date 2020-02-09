/* eslint-disable */
export const OVERVIEW_CHILDREN = [
  { key: 'projects', value: 'Projects', link: '/projects' },
  { key: 'metrics',  value: 'Metrics',  link: '/metrics' }
];

export const DATA_FLOW_CHILDREN = [
  { key: 'trigger', value: 'Trigger', link: '/trigger' },
  { key: 'action',  value: 'Action',  link: '/action' },
  { key: 'output',  value: 'Output',  link: '/output' }
];

export const MAIN_MENU = [
  { key: 'overview',    icon: '', value: 'Overview',    link: '/overview', children: OVERVIEW_CHILDREN  },
  { key: 'data_flow',   icon: '', value: 'Data Flow',   link: '/dataflow', children: DATA_FLOW_CHILDREN },
  { key: 'interaction', icon: '', value: 'Interaction', link: '/interaction' },
  { key: 'training',    icon: '', value: 'Training',    link: '/training'    },
  { key: 'deployment',  icon: '', value: 'Deployment',  link: '/deployment'  },
  { key: 'adoption',    icon: '', value: 'Adoption',    link: '/adoption'    }
];

/* eslint-enable */
