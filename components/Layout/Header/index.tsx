import { Grid } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import ProfileSection from './profile';
import Link from 'next/link';

const HeaderWrapper = styled.div`
  height: 4em;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);

  .top-grid{
    height: 100%;
    align-items: center;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Grid container justifyContent={"space-between"} className="top-grid">
        <Grid item>
          <Link href={"/dashboard"}>Account Manager</Link>
        </Grid>
        <Grid item>
          <ProfileSection />
        </Grid>
      </Grid>
    </HeaderWrapper>
  )
}

export default Header