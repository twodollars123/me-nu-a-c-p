import { useStore, actions } from "../../store";

import "./Menu.scss";

function Menu() {
  const [state, dispatch] = useStore();
  const renderMenuItems = (data) => {
    console.log(data);
    const result = data.map((menu, idx) => {
      if (!menu?.children) {
        return <li key={idx}>{menu.label}</li>;
      } else {
        return (
          <li key={idx}>
            {menu.label}
            <ul className={`sub-menu`}>{renderMenuChild(menu.children)}</ul>
          </li>
        );
      }
    });
    return result;
  };

  const renderMenuChild = (data) => {
    const result = data.map((menu, idx) => {
      if (!menu?.children) {
        return <li key={idx}>{menu.label}</li>;
      } else {
        return (
          <li key={idx}>
            {menu.label}
            <ul className={``}>{renderMenuChild(menu.children)}</ul>
          </li>
        );
      }
    });
    return result;
  };

  return <ul className="nav">{renderMenuItems(state.menuData)}</ul>;
}

export default Menu;
