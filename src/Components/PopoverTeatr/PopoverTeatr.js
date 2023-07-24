import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import {motion} from "framer-motion";
import dom from "../../pages/Park/MapIcons/assets/Дом моды.png";
import scena from "../../pages/Park/MapIcons/assets/Сцена.png";
import teatr from "../../pages/Park/MapIcons/assets/Театр.png";


const  MouseOverPopoverTeatr =({text})=> {
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
                <motion.img className='teatr' whileHover={{scale:1.2}} src={teatr} alt=""/>

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

export default MouseOverPopoverTeatr;