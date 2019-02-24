import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        tabs: state.summary.tabs,
        activeTabIndex: state.summary.active_tab_index
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickTab: (event, tab_index) => dispatch({
            type: 'ACTIVE_TAB',
            tab_index
        })
    };
}

const styles = theme => ({});

const Summary = ({tabs, activeTabIndex, onClickTab}) => {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={8}></Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          <Tabs variant='fullWidth' value={activeTabIndex} onChange={onClickTab}>
            {tabs.map((tab, idx) => <Tab key={idx} label={tab.label} />)}
          </Tabs>
          <div>{tabs[activeTabIndex].component}</div>
          </Grid>
        </Grid>
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Summary));
