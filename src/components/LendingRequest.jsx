import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { connect } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutline from '@material-ui/icons/CheckBoxOutlineBlank';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

const mapStateToProps = state => {
    return {
        activities: state.newLendingRequest.activities,
        subActivities: state.newLendingRequest.subActivities, 
        expandedActivityId: state.newLendingRequest.expandedActivityId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onExpandActivity: (activityId) => dispatch({
            type: 'EXPAND_ACTIVITY',
            activityId
        })
    }
};

const styles = theme => ({});

const LendingRequest = ({activities, subActivities, expandedActivityId, onExpandActivity}) => {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <List>
                {activities.map(activity => (
                    <React.Fragment key={activity.id}>
                        <ListItem button onClick={() => {onExpandActivity(activity.id)}}>
                            <ListItemIcon><CheckBoxOutline /></ListItemIcon>
                            <ListItemText inset primary={activity.name} />
                            {activity.id === expandedActivityId ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </ListItem>
                        <Collapse in={activity.id === expandedActivityId} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {subActivities
                                    .filter(sub => sub.activityId === expandedActivityId)
                                    .map(sub => (
                                        <ListItem key={sub.id} button style={{paddingLeft: 32}}>
                                            <ListItemIcon>
                                                <CheckBoxIcon />
                                            </ListItemIcon>
                                            <ListItemText inset primary={sub.name} />
                                        </ListItem>
                                    ))}
                                
                            </List>
                        </Collapse>
                    </React.Fragment>
                ))}
            </List>
          </Grid>
          <Grid item xs={9}>
            test
          </Grid>
        </Grid>
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LendingRequest));
