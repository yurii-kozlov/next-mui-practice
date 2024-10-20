import { FC, ReactNode } from "react";
import { StyledWrapper } from "./Layout.style";

interface LayoutProps {
  children: ReactNode
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
};
