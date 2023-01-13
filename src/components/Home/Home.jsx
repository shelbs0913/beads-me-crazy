import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from "@mui/material/Typography";
import "./Home.css";

const images = [
  {
    url: require('../../assets/images/homepage/greenandwhite.jpg'),
    title: 'Shop Now',
    width: '45%',
  },

  {
    url: '/static/images/buttons/camera.jpg',
    title: 'Events',
    width: '40%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 400,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Home() {
  return <>
          <div className="image">
        <div className="image-overlay"></div>
      </div>
      <section>
       <div>
         <h1>Custom Beads at a resonable price!!!</h1>
         <Box sx={{ width: 500, height: 5000, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
           {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>
      </section>
    {/* <Box sx={{ display: 'flex', justifyContent: "space-evenly", minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          a href="../Shop"
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
                position: 'relative',
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
    </Box>     */}
  </>
}

const itemData = [
  {
    img: require('../../assets/images/homepage/bluelotus.jpg'),
    title: "Blue Lotus",
  },
  {
    img: require("../../assets/images/homepage/chakra.jpg"),
    title: "Chakra",
  },
  {
    img: require("../../assets/images/homepage/earthtones.jpg"),
    title: "Earthtones",
  },
  {
    img: require("../../assets/images/homepage/green.jpg"),
    title: "Green",
  },
  {
    img: require("../../assets/images/homepage/greenandblack.jpg"),
    title: "Green and Black",
  },
  {
    img: require("../../assets/images/homepage/greentea.jpg"),
    title: "Green Tea",
  },
  {
    img: require("../../assets/images/homepage/hematitecollection.jpg"),
    title: "Hematite Collection",
  },
  {
    img: require("../../assets/images/homepage/howliteblackgold.jpg"),
    title: "Howlite Black and Gold",
  },
  {
    img: require("../../assets/images/homepage/treeoflife.jpg"),
    title: "Tree of Life",
  },

];
