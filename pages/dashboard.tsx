import React from "react";
import Layout from "components/Layout";
import { Grid } from "@mui/material";
import styled from "styled-components";
import Cards from "elements/Cards";
import Notifications from "components/Dashboard/Notifications";
import AccountDetails from "components/Dashboard/AccountDetails";
import Overview from "components/Dashboard/Overview";

const DashboardWrapper = styled.div`
  height: calc(100vh - 4em);
  padding: 20px;
  .parent-grid {
    height: 100%;
  }
  .top-row-grid {
    height: 100%;
  }

  .center-grid-items {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

function Dashboard() {
  return (
    <Layout>
      <DashboardWrapper>
        <Grid container direction={"column"} className="parent-grid" spacing={2}>
          <Grid item xs={6}>
            <Grid container className="top-row-grid" spacing={2}>
              <Grid item xs={6} >
                <Cards heading="Notifications">
                  <div className="center-grid-items">
                    <Notifications />
                  </div>
                </Cards>
              </Grid>
              <Grid item xs={6}>
                <Cards heading="Account Details">
                  <div className="center-grid-items">
                    <AccountDetails />
                  </div>
                </Cards>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Cards heading="Overview">
              <div className="center-grid-items">
                <Overview />
              </div>
            </Cards>
          </Grid>
        </Grid>
      </DashboardWrapper>
    </Layout>
  );
}

export default Dashboard;
