import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';

export default function ColorModeIconDropdown(props) {
  const { mode, setMode } = useColorScheme();
  
  React.useEffect(() => {
    setMode('dark');
  }, [setMode]);

  if (!mode) {
    return null;
  }
  
  // Dark mode only - return null to hide the toggle
  return null;
}
