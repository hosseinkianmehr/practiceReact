import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const Footer = () => {
  return (
    <Stack direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3} >
      <Grid   >
        <IconButton><AttachFileIcon /></IconButton>
        <IconButton><CloudQueueIcon /></IconButton>
      </Grid >
      <Stack >
        <Typography>hello</Typography>
      </Stack >

    </Stack>

  )
}

export default Footer