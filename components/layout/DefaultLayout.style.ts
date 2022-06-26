import { createStyles } from '@mantine/core';

export default createStyles((theme, _params, getRef) => ({
  wrapperBackground: {
    position: 'relative',
    transition: ' all  3s',
    minHeight: '100vh',
    background: 'linear-gradient(to top right, #b148e6,#00d4ff)',
    '--op': 0,
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transition: 'all 2s',
      opacity: ' var(--op)',
      background: 'linear-gradient(to right, #b148e6,#00d4ff) !important',
    },
  },
  wrapperContent: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
    position: 'relative',
  },
  header: {
    minHeight: '100px',
  },
  main: {
    flex: '1 1 auto',
  },
  footer: {},
}));
