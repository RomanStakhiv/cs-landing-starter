import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from '@src/components/link/Link';
import i18nextConfig from '@root/next-i18next.config';

const useStyles = makeStyles()((theme) => ({
  root: {
    position: 'relative',
    background: theme.palette.info.light,
  },
  menuLink: {
    width: '158px',
    textAlign: 'center',
  },
}));

export const LangSwitcher = () => {
  const { classes } = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleClick}>Select language</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {i18nextConfig.i18n.fullLocalesData.map(({ id, code, label }) => (
          <MenuItem onClick={handleClose} key={id}>
            <Link href={`/${code}`} className={classes.menuLink}>
              {label}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
