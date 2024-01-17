import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Loading() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + (Math.random() * 10 / 2), 100));
    }, 50);
  }, []);

  return (
    <div>
      <Backdrop
        sx={{
          color: '#fff',
          backgroundColor: "#0e021d",
          zIndex: (theme) => theme.zIndex.drawer + 2
        }}
        open={progress < 99}
      // onClick={handleClose}
      >
        <CircularProgressWithLabel size={100} value={progress} />
      </Backdrop>
    </div>
  );
}