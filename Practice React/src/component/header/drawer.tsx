import { Box, SwipeableDrawer } from '@mui/material'
import React from 'react'

const Drawer = (open) => {
    const [state, setState] = React.useState(open);

    const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState(open);
    };
  return (
    <SwipeableDrawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer( false)}
            onOpen={toggleDrawer( true)}
          >
            <Box sx={{width:'100'}}
            role="presentation"
            onClick={toggleDrawer( false)}
            onKeyDown={toggleDrawer( false)}>

            </Box>
          </SwipeableDrawer>
  )
}

export default Drawer












// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';



// export default function Drawer() {
//   const [state, setState] = React.useState(false);

//   const toggleDrawer =
//     ( open: boolean) =>
//     (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === 'keydown' &&
//         ((event as React.KeyboardEvent).key === 'Tab' ||
//           (event as React.KeyboardEvent).key === 'Shift')
//       ) {
//         return;
//       }
//       setState(open);
//     };

//   const list = () => (
//     <Box
//       role="presentation"
//       onClick={toggleDrawer( false)}
//       onKeyDown={toggleDrawer( false)}
//     >
      
//     </Box>
//   );

//   return (
//     <div>
     
//         <React.Fragment>
//           <Button onClick={toggleDrawer( true)}>{'left'}</Button>
//           <Drawer
//             anchor={'left'}
//             open={state}
//             onClose={toggleDrawer( false)}
//           >
//             {list()}
//           </Drawer>
//         </React.Fragment>
     
//     </div>
//   );
// }