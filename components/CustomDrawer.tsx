import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

export interface DrawerItem {
    icon: React.ReactElement;
    text: string;
}
interface Props {
    items: DrawerItem[];
    open: boolean;
}
const useStyles = makeStyles({
    root: {
        "& .MuiBackdrop-root": {
            position: "relative",
            height: "100vh"
        }
    },
    paper: {
        position: "absolute"
    }
});

export default function CustomDrawer() {
    const [open, setOpen] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);
    const classes = useStyles()
    return (
        <>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
            >
                <Typography
                    textAlign={'center'}
                >
                    Ruta
                </Typography>
                <List>
                    <ListItem onClick={() => setOpen(false)}>
                        <ListItemText>
                            <Typography>fjpkasjkofaskonjnofsa</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpen(false)}>
                        <ListItemText>
                            <Typography>fjpkasjkofaskonjnofsa</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpen(false)}>
                        <ListItemText>
                            <Typography>fjpkasjkofaskonjnofsa</Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <Drawer sx={{ zIndex: 1, backgroundColor: 'green' }}
                variant='persistent'
                anchor="bottom"
                open={true}
                //slotProps={{ backdrop: { invisible: true } }}
                classes={{
                    paper: classes.paper,
                    root: classes.root,
                }}
            >
                <List sx={{ display: 'flex' }}>
                    <React.Fragment>
                        <ListItemButton sx={{ display: 'flex', flexDirection: 'column' }}>
                            <ListItemIcon sx={{ minWidth: 'auto !important' }}><LocationOnIcon /></ListItemIcon>
                            <ListItemText primary={'Explorar'} />
                        </ListItemButton>
                        <ListItemButton onClick={() => setOpen(!open)} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <ListItemIcon sx={{ minWidth: 'auto !important' }}> <AddIcon /></ListItemIcon>
                            <ListItemText primary={'Rutas'} />
                        </ListItemButton>
                    </React.Fragment>
                </List>
            </Drawer>
        </>
    );
};


