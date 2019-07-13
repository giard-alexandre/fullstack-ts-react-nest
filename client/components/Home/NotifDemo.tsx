import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { useSnackbar, VariantType } from 'notistack';
import * as React from 'react';

export const NotifDemo: React.FunctionComponent = () => {
    const {enqueueSnackbar} = useSnackbar();

    const successClick = (variant: VariantType) => {
        enqueueSnackbar('I love hooks', {variant});
    };

    return (
        <Card>
            <CardHeader title='Notifications' />
            <CardContent>
                <Typography variant='subtitle1'>
                    These are examples for how to use the alert buttons
                </Typography>
                <Button variant={'contained'} color={'default'} onClick={() => successClick('default')} href=''>
                    default
                </Button>
                <Button variant={'contained'} color={'primary'} onClick={() => successClick('success')} href=''>
                    Success
                </Button>
                <Button variant={'contained'} color={'secondary'} onClick={() => successClick('error')} href=''>
                    Error
                </Button>
                <Button variant={'contained'} color={'secondary'} onClick={() => successClick('warning')} href=''>
                    Warning
                </Button>
                <Button variant={'contained'} color={'secondary'} onClick={() => successClick('info')} href=''>
                    Info
                </Button>
            </CardContent>
        </Card>
    );
};
