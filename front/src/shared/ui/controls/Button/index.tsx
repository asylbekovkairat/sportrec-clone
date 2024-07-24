import { Button, ButtonProps, styled } from '@mui/material';

interface StyledButtonProps extends ButtonProps {
  background?: string;
  textColor?: string;
  textWeight?: number;
  padding?: string;
}

export const AppButton = styled(Button)<StyledButtonProps>((props) => ({
  borderRadius: '10px',
  padding: props.padding,
  background: props.background,
  color: props.textColor,
  fontWeight: props.textWeight,
  minWidth: 'fit-content',

  [`&:hover`]: {
    background: props.background,
  },
}));
