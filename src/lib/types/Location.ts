import { ReactNode } from 'react';

export type LOCATION_KEY = 'solo-projects' | 'eog-resources' | 'novacoast' | 'texas-tech';

export type Location = {
  key: LOCATION_KEY;
  image: string;
  title: string;
  dates: string;
  description: ReactNode;
};
