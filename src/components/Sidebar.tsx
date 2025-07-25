import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Overview", path: "/overview" },
    { name: "Requests", path: "/requests" },
    { name: "Returns", path: "/returns" },
    { name: "Inventory", path: "/inventory" },
    { name: "History", path: "/history" },
    { name: "Analytics", path: "/analytics" }
  ];

  return (
    <div className="h-screen w-60 bg-gray-800 text-white p-4 fixed top-0 left-0">
      <h2 className="text-2xl font-bold mb-6">Lab Admin</h2>
      <ul className="space-y-4">
        {links.map(link => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-300"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
