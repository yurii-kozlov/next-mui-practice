'use client';

import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import { NavigateNext } from "@mui/icons-material";

export const MuiBreadcrumbs = () => {
  const items = [
    { href: '#contact-us', label: 'Contact us'},
    { href: '#my-account', label: 'My account'},
    { href: '#checkout', label: 'Checkout'},
    { label: 'Acuvue Moist 30'},
  ]

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext fontSize="small" />} maxItems={2} itemsBeforeCollapse={2}>
      {items.map((item) => (
        item.href ? (
          <MuiLink underline="hover" key={item.label} href={item.href} component={Link}>{item.label}</MuiLink>
        ): (
          <Typography key={item.label} variant="body2">{item.label}</Typography>
        )
      ))}
    </Breadcrumbs>
  );
};