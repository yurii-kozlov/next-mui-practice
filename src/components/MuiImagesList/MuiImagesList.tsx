import { Grid, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { IMAGES } from "@/constants";
import { StyledImagesList } from "./MuiImagesList.style";
import Image from "next/image";
import { StyledWrapper } from "./MuiImagesList.style";

export const MuiImagesList = () => {
  return (
    <StyledWrapper>
      <StyledImagesList rowHeight={164} cols={3}>
        {IMAGES.map(({ title, img }) => (
          <ImageListItem>
            <Image
              src={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={title}
              loading="lazy"
              width={164}
              height={164}
            />
            <ImageListItemBar title={title} />
          </ImageListItem>
        ))}
      </StyledImagesList>
      <StyledImagesList variant="woven" rowHeight={164} cols={3} gap={8}>
        {IMAGES.map(({ title, img }) => (
          <ImageListItem>
            <Image
              src={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={title}
              loading="lazy"
              width={164}
              height={164}
            />
          </ImageListItem>
        ))}
      </StyledImagesList>
    </StyledWrapper>
  );
};
