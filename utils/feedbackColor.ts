import { Feedback } from '@/types/feedback';

export const FEEDBACK_COLOR_SET = {
  yellow: {
    primary: '#ffe2ab',
    secondary: '#fdc75f',
  },
  mint: {
    primary: '#94d9d9',
    secondary: '#84cccc',
  },
  pink: {
    primary: '#ffc9cf',
    secondary: '#f397a1',
  },
  purple: {
    primary: '#cdbdd7',
    secondary: '#b08fc5',
  },
  green: {
    primary: '#d7e3c2',
    secondary: '#afce7a',
  },
} as const;

export const pickThemeByTimestamp = (
  timestamp: number
): keyof typeof FEEDBACK_COLOR_SET => {
  switch (timestamp % 4) {
    case 0:
      return 'yellow';
    case 1:
      return 'mint';
    case 2:
      return 'pink';
    case 3:
      return 'purple';
  }
  return 'yellow';
};
