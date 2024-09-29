import { TAG_KEY } from '@/lib/types';
import {
  faBootstrap,
  faGithub,
  faJs,
  faReact,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { ReactElement } from 'react';

const SIZE = 24;

type TagIcon = {
  icon: ReactElement;
  href?: string;
};

export const TAG_ICON_MAP: Record<TAG_KEY, TagIcon> = {
  Baseweb: {
    icon: (
      <Image
        src="/icons/baseweb.svg"
        width={SIZE}
        height={SIZE}
        alt="BW"
        title="Baseweb UI"
        className="filter dark:invert"
      />
    ),
    href: 'https://baseweb.design/',
  },
  Bootstrap: {
    icon: (
      <FontAwesomeIcon
        icon={faBootstrap}
        width={SIZE}
        height={SIZE * 0.8}
        title="Bootstrap"
      />
    ),
    href: 'https://getbootstrap.com/',
  },
  Figma: {
    icon: (
      <Image
        src="/icons/figma.svg"
        width={SIZE * 0.7}
        height={SIZE}
        alt="FG"
        title="Figma"
        className="filter grayscale brightness-50 dark:brightness-150"
      />
    ),
    href: 'https://www.figma.com/',
  },
  GitHub: {
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        width={SIZE}
        height={SIZE}
        title="GitHub"
      />
    ),
  },
  Golang: {
    icon: (
      <Image
        src="/icons/golang.png"
        width={SIZE * 0.75}
        height={SIZE}
        alt="GO"
        title="Golang"
        className="filter grayscale brightness-75 dark:brightness-110"
      />
    ),
    href: 'https://golang.org/',
  },
  'Google Cloud': {
    icon: (
      <Image
        src="/icons/google-cloud.svg"
        width={SIZE}
        height={SIZE * 0.7}
        alt="GC"
        title="Google Cloud"
        className=" filter grayscale brightness-50 dark:brightness-150"
      />
    ),
    href: 'https://cloud.google.com/',
  },
  JavaScript: {
    icon: (
      <FontAwesomeIcon
        icon={faJs}
        width={SIZE}
        height={SIZE}
        title="JavaScript"
      />
    ),
    href: 'https://www.javascript.com/',
  },
  Mapbox: {
    icon: (
      <Image
        src="/icons/mapbox.svg"
        width={SIZE}
        height={SIZE}
        alt="MB"
        title="Mapbox"
        className="filter dark:invert"
      />
    ),
    href: 'https://www.mapbox.com/',
  },
  MUI: {
    icon: (
      <Image
        src="/icons/material-ui.svg"
        width={SIZE}
        height={SIZE}
        alt="MU"
        title="Material UI"
        className="filter dark:invert"
      />
    ),
    href: 'https://v5.mui.com/',
  },
  MySQL: {
    icon: (
      <Image
        src="/icons/mysql.png"
        width={SIZE}
        height={SIZE * 0.66}
        alt="MySQL"
        title="MySQL"
        className="!h-auto !min-h-0 filter grayscale brightness-0 dark:brightness-150"
      />
    ),
    href: 'https://www.mysql.com/',
  },
  'Next.js': {
    icon: (
      <Image
        src="/icons/next-js.svg"
        width={SIZE}
        height={SIZE}
        alt="NX"
        title="Next.js"
        className="filter dark:invert"
      />
    ),
    href: 'https://nextjs.org/',
  },
  PowerShell: {
    icon: (
      <Image
        src="/icons/powershell.svg"
        width={SIZE}
        height={SIZE}
        alt="PS"
        title="PowerShell"
        className="filter dark:invert"
      />
    ),
    href: 'https://docs.microsoft.com/en-us/powershell/',
  },
  React: {
    icon: (
      <FontAwesomeIcon
        icon={faReact}
        width={SIZE}
        height={SIZE}
        title="React"
      />
    ),
    href: 'https://reactjs.org/',
  },
  'React Native': {
    icon: (
      <FontAwesomeIcon
        icon={faReact}
        width={SIZE}
        height={SIZE}
        title="React Native"
      />
    ),
    href: 'https://reactnative.dev/',
  },
  Redux: {
    icon: (
      <Image
        src="/icons/redux.svg"
        width={SIZE}
        height={SIZE}
        alt="RX"
        title="Redux"
        className="filter dark:invert"
      />
    ),
    href: 'https://redux.js.org/',
  },
  Repository: {
    icon: (
      <FontAwesomeIcon
        icon={faArchive}
        width={SIZE}
        height={SIZE}
        title="Repository"
      />
    ),
  },
  'Spotify API': {
    icon: (
      <FontAwesomeIcon
        icon={faSpotify}
        width={SIZE}
        height={SIZE}
        title="Spotify API"
      />
    ),
    href: 'https://developer.spotify.com/',
  },
  'Tailwind CSS': {
    icon: (
      <Image
        src="/icons/tailwind.svg"
        width={SIZE}
        height={SIZE}
        alt="TW"
        title="Tailwind CSS"
        className="filter dark:invert"
      />
    ),
    href: 'https://tailwindcss.com/',
  },
  TypeScript: {
    icon: (
      <Image
        src="/icons/ts.svg"
        width={SIZE}
        height={SIZE}
        alt="TS"
        title="TypeScript"
        className="filter dark:invert"
      />
    ),

    href: 'https://www.typescriptlang.org/',
  },
  Vercel: {
    icon: (
      <Image
        src="/icons/vercel.svg"
        width={SIZE}
        height={SIZE}
        alt="VC"
        title="Vercel"
        className="filter dark:invert"
      />
    ),
    href: 'https://vercel.com/',
  },
};
