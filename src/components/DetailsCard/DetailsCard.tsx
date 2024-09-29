import { TAG_KEY } from '@/lib/types';
import { Box, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { TAG_ICON_MAP } from './constants';

type DetailsCardProps = {
  image?: string;
  title: string;
  dates: string;
  links?: ReactNode[];
  repoURL?: string;
  description: ReactNode;
  tags: TAG_KEY[];
};

export function DetailsCard({
  image,
  title,
  dates,
  links,
  repoURL,
  description,
  tags,
}: DetailsCardProps) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', borderRadius: 4 }}>
      {image ? (
        <CardMedia
          sx={{ flex: 1 }}
          image={image}
          title={image}
        />
      ) : null}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            gutterBottom
            variant="headingEmphasis"
            color="primary"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            p: 4,
            flexWrap: 'wrap-reverse',
            rowGap: 3,
            columnGap: 3,
            '& > :not(style)~:not(style)': {
              ml: `0 !important`,
            },
          }}
        >
          {tags.map((tag) => (
            <a href={TAG_ICON_MAP[tag].href ?? repoURL ?? '#'}>
              <Chip
                key={tag}
                icon={TAG_ICON_MAP[tag].icon}
                label={tag}
                clickable
              />
            </a>
          ))}
        </CardActions>
      </Box>
    </Card>
  );
}
