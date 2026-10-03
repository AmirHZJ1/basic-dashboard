import clsx from "clsx";
import { NavLink } from "react-router";

const Menus = ({ menus }) => {
  return (
    <div className="mt-6">
      {menus.map((menu) => (
        <div key={menu.id}>
          <span className="nav-label">{menu.title}</span>
          <nav className="nav">
            {menu.items.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className={({ isActive }) => {
                   return clsx(isActive && "active");
                  }}
                  end
                >
                  <Icon />
                  <span>{item.title}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      ))}
    </div>
  );
};

export default Menus;
