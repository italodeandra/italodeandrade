import React from "react"
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core"
import { SchoolRounded } from "@material-ui/icons"
import FloatingTypography from "../../common/components/FloatingTypography/FloatingTypography"

const Qualifications = () => {
    return (
        <FloatingTypography text="Qualifications" variant="h6" gutterBottom>
            <List disablePadding>
                <ListItem disableGutters>
                    <ListItemAvatar>
                        <Avatar>
                            <SchoolRounded />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="BSc, Computer Information Systems"
                        secondary="Universidade de Franca, Brazil, 2015 - 2018"
                    />
                </ListItem>
            </List>
        </FloatingTypography>
    )
}

export default Qualifications