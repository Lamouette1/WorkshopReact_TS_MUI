import { Button as MuiButton, Grid, styled } from "@mui/material";

interface GridOperationButtonProps {
  selectedOperation: string;
  operation: string;
  selectOperation: (digit: string) => void;
}

const Button = styled(MuiButton)<{ selected: boolean }>((props) => ({
  borderColor: props.selected ? "#fff" : "rgba(255, 241, 73, 0.5)",
}));

export const OperationButton: React.FC<GridOperationButtonProps> = ({
  selectedOperation,
  operation,
  selectOperation,
}) => {
  return (
    <Grid item xs={3}>
      <Button
        /* !!!TODO set the button to fullwidth, variant outlined
      and set the onClick to selectOperation fuction */
        selected={selectedOperation === operation}
      >
        {operation}
      </Button>
    </Grid>
  );
};
