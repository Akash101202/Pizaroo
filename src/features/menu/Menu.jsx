import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = getMenu();
  return menu;
}

export default Menu;
