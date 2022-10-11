import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0029/395/863/assets/220700_96-M7659_W_DP_Sale.jpg",
    title: "Women",
    category: "women's clothing",
    width: "40%",
  },
  {
    url: "https://img.ltwebstatic.com/images3_pi/2021/02/20/16137865829e6809055df4b41ca2d55ddac1b2b2e2_thumbnail_600x.webp",
    title: "Men",
    category: "men's clothing",
    width: "30%",
  },
  {
    url: "https://www.americanchemistry.com/var/site/storage/images/6/4/1/3/83146-1-eng-US/Electonic-Devices.png",
    title: "Electronics",
    category: "electronics",
    width: "30%",
  },
  {
    url: "https://zoulnzera.com/storage/product-images/1638332298_bNMkYKJHLy.jpg",
    title: "Kids",
    category: "kids",
    width: "30%",
  },
  {
    url: "https://www.brilliance.com/assets/images/landing-pages/diamond-necklace.jpg",
    title: "Jewellry",
    category: "jewelery",
    width: "30%",
  },

  {
    url: "https://www.theladders.com/wp-content/uploads/Closet_fashion_062618.jpg",
    title: "View all",
    category: "all",
    width: "40%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function FilterBox(props) {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map((image) => (
        <ImageButton
          value={image.category}
          component={props.component}
          to={props.to}
          onClick={() => props.handleClick(image.category)}
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
