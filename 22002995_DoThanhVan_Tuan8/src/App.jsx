import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import RecipeOfTheDay from "./components/RecipeOfDay/recipe-of-day";
import SummerRecipes from "./components/SummerRecipe/summer-recipe";
import RecipeVideos from "./components/RecipeVideo/recipe-video";
import EditorsPick from "./components/EditorsPick/editors-pick";

function App() {
  return (
    <>
      <Header />
      <RecipeOfTheDay />
      <SummerRecipes />
      <RecipeVideos />
      <EditorsPick />
      <Footer />
    </>
  );
}

export default App;
