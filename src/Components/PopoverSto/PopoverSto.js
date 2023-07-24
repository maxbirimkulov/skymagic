import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import {motion} from "framer-motion";
import globus from "../../pages/Park/MapIcons/assets/Глобус.png";
import eko from "../../pages/Park/MapIcons/assets/Экостанция.png";
import sto from "../../pages/Park/MapIcons/assets/СТО.png";




const  MouseOverPopoverSto =({text})=> {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <motion.img className='sto' whileHover={{scale:1.2}} src={sto} alt=""/>
            </Typography>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>{text}</Typography>
            </Popover>
        </div>
    );
}

export default MouseOverPopoverSto;