import React from "react"
import { Typography } from "@material-ui/core"
import { profile } from "../../me/me"
import FloatingTypography from "../../common/components/FloatingTypography/FloatingTypography"

const Profile = () => {
    return (<>
        <FloatingTypography text="Summary" variant="h6" gutterBottom>
            <Typography variant="body1" align="justify" paragraph>
                {profile.summary}
            </Typography>
        </FloatingTypography>

        <FloatingTypography text="Ambition" variant="h6" gutterBottom>
            <Typography variant="body1" align="justify" paragraph>
                {profile.ambition}
            </Typography>
        </FloatingTypography>
    </>)
}

export default Profile