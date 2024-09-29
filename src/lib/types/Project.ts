import { ReactNode } from 'react';

type ProjectLink = {
  href: string;
  icon: ReactNode;
};

export type Project = {
  image?: string; // remove
  title: string;
  dates: string;
  links?: ProjectLink[];
  description: ReactNode;
  tags: ReactNode[];
};
