import { createClient } from "contentful";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "recipe",
  });

  return {
    props: {
      recipes: res.items,
    },
  };
};

const Recipes = ({ recipes }) => {
  return <div className="recipe-list">Recipe List</div>;
};

export default Recipes;
