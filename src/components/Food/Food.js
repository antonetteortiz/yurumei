import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "../Navbar/Navbar";
import "./Food.css"
import Image from "../../images/cassavaBread.jpg";

function Food(props) {
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      background:
        "url(https://d1ralsognjng37.cloudfront.net/5c8070fb-fc4a-477b-8734-b6bbe66d5532.jpeg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      // opacity: "0.5",
      // padding: theme.spacing(8, 0, 6),
      height: "55vh",
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    // cardContainer: {
    //   display: "flex",
    //   width: "100%",
    //   backgroundColor: "#FFD800",
    //   flexDirection: "row",
    // },
    // cardGrid: {
    //   paddingTop: theme.spacing(8),
    //   paddingBottom: theme.spacing(8),
    // },
    // card: {
    //   height: "150%",
    //   // margin: "0 auto",
    //   width: "30%",
    //   display: "flex",
    //   flexDirection: "column",
    //   margin: "10px",
    //   border: "1px solid black",
    // },
    // cardMedia: {
    //   paddingTop: "56.25%", // 16:9
    // },
    // cardContent: {
    //   height: "150px",
    // },

    // recipeCard: {
    //   margin: "auto 0",
    //   marginTop: "30px",
    //   backgroundColor: "#FFD800",
    //   align: "center",
    // },
    // header: {
    //   height: "500px",
    // },
  }));

  const classes = useStyles();

// Recipe Search

const [recipeSearch, setRecipeSearch] = useState("");
const [filteredRecipeList, setFilteredRecipeList] = useState([]);

const searchRecipe = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setRecipeSearch(e.target.value);
    if (recipeSearch.length > 1) {
      let newRecipeArr = props.recipeList.filter((input) =>
        input.recipeName.toLowerCase().includes(recipeSearch)
      );
      console.log(newRecipeArr);
      setFilteredRecipeList(newRecipeArr);
    }; 
}



// Place data from API in cards
  let recipeList = props.recipeList.map((recipe, i) => {
    // console.log(recipe)
    return (
      // card container
      <div className="recipeCard shadow-lg rounded">
        {/* image container */}
        <div>
          <img className="recipeImage" src={recipe.photo} alt="" />
        </div>
        {/* image container END */}

        {/* name/description */}
        <div style={{ paddingTop: "20px", paddingLeft: "10px" }}>
          <h4>{recipe.recipeName}</h4>
          <div style={{ borderTop: "2px solid #FFD800" }}>
            <p style={{ paddingTop: "10px" }}>{recipe.description}</p>
          </div>
        </div>

        {/* action container */}
        <div style={{ display: "flex", margin: "1rem" }}>
          <button
            className="recipeButton"
            style={{
              outline: "none",
              border: "none",
              marginRight: "10px",
              borderRadius: "4px",
            }}
          >
            Like
          </button>
          <Link to={`/recipe/${recipe.recipeName}`}>
            <button className="recipeButton" size="small" color="primary">
              View
            </button>
          </Link>
        </div>
        {/* action container END */}
      </div>
    );
  });

  console.log(filteredRecipeList)
  let recipeListFiltered = filteredRecipeList.map((recipe, i) => {
    return (
      // card container
      <div className="recipeCard">
        {/* image container */}
        <div>
          <img className="recipeImage" src={recipe.photo} alt="" />
        </div>
        {/* image container END */}

        {/* name/description */}
        <div
          className="lead"
          style={{ paddingTop: "20px", paddingLeft: "10px" }}
        >
          <h4 className="lead">{recipe.recipeName}</h4>
          <div style={{ borderTop: "2px solid #FFD800" }}>
            <p className="lead" style={{ paddingTop: "10px" }}>{recipe.description}</p>
          </div>
        </div>

        {/* action container */}
        <div style={{ display: "flex", margin: "1rem" }}>
          <button
            className="recipeButton"
            style={{
              outline: "none",
              border: "none",
              marginRight: "10px",
              borderRadius: "4px",
            }}
          >
            Like
          </button>
          <Link to={`/recipe/${recipe.recipeName}`}>
            <button className="recipeButton" size="small" color="primary">
              View
            </button>
          </Link>
        </div>
        {/* action container END */}
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Navbar />
      <div style={{backgroundColor: "red"}}>
        <div className="row featurette recipeHeading">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              History of the Garifuna's{" "}
              {/* <span class="text-muted">It’ll blow your mind.</span> */}
            </h2>
            <p className="lead">
              Garifuna food is traditionally based on the staple foods of
              cassava, plantain and banana, combined with fish and other
              seafood. The colors of the Garifuna flag reflect the importance of
              cassava to the Garifuna people, as the yellow stripe represents
              the color of cassava bread; “ereba” in the Garifuna language.
              Cassava is not only made into flatbread, but also into sweet
              deserts such as cassava pudding (also known as plastic cake due to
              its rubbery consistency), and sweetened drinks like sahou. It is
              also sometimes included in stews. Plantain and banana are used
              both ripe and unripe (green) in Garifuna food. The word “hudut” is
              commonly used to refer to the popular fish and coconut milk stew
              served with mashed plantain. In actual fact is the word for the
              plantain alone. The plantain served with the fish is a combination
              of around three parts green plantain to one part ripe plantain.
              Both are boiled and then pounded together in a wooden “mata” until
              the consistency of a moist dough. Mashed plantain is served with
              other Garifuna dishes such as “Tikini” and “Tapado”.
            </p>
          </div>
          <div class="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="700"
              src={Image}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
              alt=""
            />
          </div>
        </div>

      </div>
      <div
        style={{
          width: "100vw",
          margin: "100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "1rem",
        }}
      >
        {recipeSearch.length > 1 ? recipeListFiltered : recipeList}
      </div>
    </div>
  );
}

export default Food;
