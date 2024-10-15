'use client'

import { StyledSubmitButton, StyledTitle } from "./page.style";

export default function Home() {
  return (
    <div>
      <StyledTitle variant="h6" color="textSecondary" gutterBottom>
        Hello
      </StyledTitle>

      <StyledSubmitButton
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log('click')}
      >
        Submit
      </StyledSubmitButton>

      {/* <Button type="submit">
        Submit
      </Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </div>
  );
}
