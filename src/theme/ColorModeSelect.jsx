import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function ColorModeSelect(props) {
  const { mode, setMode } = useColorScheme();
  
  React.useEffect(() => {
    setMode('dark');
  }, [setMode]);
  
  if (!mode) {
    return null;
  }
  
  // Dark mode only - return null to hide the selector
  return null;
}
