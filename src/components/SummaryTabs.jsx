import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const NewLendingRequestButton = withRouter(({ history }) => (
    <Button
        variant="contained"
        color='primary'
        onClick={() => { history.push('/lending-request') }}
    >
        New Lending Request
    </Button>
));

export const Tab1 = () => <h1>tab1</h1>;
export const Tab2 = () => <h1>tab2</h1>;
export const Tab3 = () => <h1>tab3</h1>;
export const Tab4 = () => <h1><NewLendingRequestButton /></h1>;
