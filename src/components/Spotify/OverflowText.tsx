'use client';

import { Box, keyframes, Typography, TypographyProps } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export function OverflowText({ children, ...rest }: TypographyProps) {
  const boxEl = useRef<HTMLDivElement | null>(null);
  const textEl = useRef<HTMLDivElement | null>(null);

  const [boundary, setBoundary] = useState(0); // px

  const mask = keyframes`
    0% { mask-image: linear-gradient(to right,transparent 0,#000 6px,#000 calc(100% - 12px),transparent 100%); }
    39% { mask-image: linear-gradient(to right,transparent 0,#000 6px,#000 calc(100% - 12px),transparent 100%); }
    41% { mask-image: linear-gradient(90deg, transparent 0, #000 6px); }
    59% { mask-image: linear-gradient(90deg, transparent 0, #000 6px); }
    61% { mask-image: linear-gradient(to right,transparent 0,#000 6px,#000 calc(100% - 12px),transparent 100%); }
    100% { mask-image: linear-gradient(to right,transparent 0,#000 6px,#000 calc(100% - 12px),transparent 100%); }
  `;

  const bounce = keyframes`
    0% { transform: translateX(0); }
    20% { transform: translateX(0); }
    40% { transform: translateX(${boundary}px); }
    60% { transform: translateX(${boundary}px); }
    80% { transform: translateX(0); }
    100% { transform: translateX(0); }
  `;

  useEffect(() => {
    setTimeout(() => {
      const boxWidth = boxEl?.current?.clientWidth ?? 0;
      const textWidth = textEl?.current?.clientWidth ?? 0;
      const diff = textWidth - boxWidth > 0 ? 1 + textWidth - boxWidth : 0;
      console.log({
        boxEl: boxEl?.current,
        textEl: textEl?.current,
        boxWidth,
        textWidth,
        diff,
      });

      setBoundary(-diff);
    }, 1000);
  });

  return (
    <Box
      width="100%"
      overflow="hidden"
    >
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          marginInlineStart: '-6px',
          animation: boundary ? `${mask} 15s infinite` : '',
        }}
      >
        <Box
          ref={boxEl}
          overflow="hidden"
        >
          <Box
            ref={textEl}
            sx={{
              animation: boundary ? `${bounce} 15s linear infinite` : '',
              whiteSpace: 'nowrap',
              width: 'fit-content',
              height: 'fit-content',
              paddingInlineStart: '6px',
            }}
          >
            <Typography
              {...rest}
              lineHeight={1}
              sx={{ textWrap: 'nowrap' }}
            >
              {children}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
