import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import mui from "./Mui.module.css";

import { makeStyles } from "@mui/styles";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const styles = makeStyles({
    btn :{
        padding:5,
        margin:0,
        textAlign: "center",
        backgroundColor:"rgb(0, 83, 116)",
        color:"white"

    },
    cardComp:{
        padding : 0, 
        paddingTop:20,
        margin:0
    }

})
// export default function RecipeReviewCard() {
    const RecipeReviewCard = (valueProp) =>{
      const [likeStatus , setLikeStatus] = React.useState(false)
const {
    strMealThumb,
    strMeal,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
} = valueProp.value
  const classes = styles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const click = () =>{
    setLikeStatus(!likeStatus)
  }
  return (
    <>
      <Card className={mui.mainCard} sx={{ width: 300 }}>
       <div  className={classes.btn} > <Typography variant="h5">{strMeal}</Typography></div>
        <CardMedia
          component="img"
          height="194"
          image={strMealThumb}
          alt="Paella dish"
        />
        <CardContent className={classes.cardComp}>
          <Typography variant="body2" color="text.secondary">
            <div style={{textAlign:"left"}}>
               <ul className={mui.list}>
             <h5> <li><b>{strIngredient1}</b> : {strMeasure1}</li></h5> 
             <h5> <li><b>{strIngredient2}</b> : {strMeasure2}</li></h5> 
             <h5> <li><b>{strIngredient3}</b> : {strMeasure1}</li></h5> 
             <h5> <li><b>{strIngredient4}</b> : {strMeasure1}</li></h5> 
               </ul> 
            </div>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {
            likeStatus ? <FavoriteIcon onClick={click} style={{color : "red"}}/> : <FavoriteIcon onClick={click}/>}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Intructions: </Typography>
            <Typography paragraph>
              {strInstructions}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
   
    </>
  );
}
export default RecipeReviewCard 