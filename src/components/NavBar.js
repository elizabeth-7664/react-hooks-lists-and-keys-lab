import React from "react";

function NavBar() {
  const Links = [
    { id: 1, href: "#home", Label: "Home" },
    { id: 2, href: "#about", Label: "About" },
    { id: 3, href: "#projects", Label: "Projects" },
  ];

  return (
    <nav>
      {Links.map((link) => (
        <a key={link.id} href={link.href}>
          {link.Label}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
