import { Category } from "@/types/Category";
import { Avatar, Card, styled } from "@mui/material";
import { blue, green, pink, yellow } from "@mui/material/colors";

export const StyledCard = styled(Card, {
  name: "Card",
  shouldForwardProp: (prop) => prop !== "isWorkCategory",
})<{ isWorkCategory: boolean }>(({ isWorkCategory }) => ({
  ...(isWorkCategory && {
    border: "1px solid red",
  }),
}));

export const StyledCategory = styled(Avatar, {
  name: "Category",
  shouldForwardProp: prop => prop !== 'category'
})<{ category: Category }>(({ category }) => ({
  backgroundColor: getCategoryBackgroundColor(category)
}));

const getCategoryBackgroundColor = (category: Category): string => {
  switch (category) {
    case Category.Work:
      return yellow[700];

    case Category.Money:
      return green[500];

    case Category.Todos:
      return pink[500];
    default:
      return blue[500];
  }
};
