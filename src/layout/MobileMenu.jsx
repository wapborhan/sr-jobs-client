import React, { useEffect } from "react";
import Mmenu from "mmenu-js";
import "mmenu-js/dist/mmenu.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const MobileMenu = () => {
  const navigate = useNavigate(); // Initialize useNavigate for client-side routing

  useEffect(() => {
    const mmenuInit = () => {
      const wi = window.innerWidth;

      if (wi <= 1099) {
        // Remove any previously initialized menus
        const existingMenu = document.querySelector(".mmenu-init");
        if (existingMenu) {
          existingMenu.remove();
        }

        // Clone #navigation and adjust its classes/attributes
        const navigation = document.querySelector("#navigation");
        if (navigation) {
          const clonedMenu = navigation.cloneNode(true);
          clonedMenu.classList.add("mmenu-init");
          clonedMenu.removeAttribute("id");
          clonedMenu.classList.remove("style-1", "style-2");

          // Remove specific classes and ids from clonedMenu children
          clonedMenu.querySelectorAll("ul, div").forEach((el) => {
            el.classList.remove(
              "style-1",
              "style-2",
              "mega-menu",
              "mega-menu-content",
              "mega-menu-section"
            );
            el.removeAttribute("id");
          });

          clonedMenu.querySelectorAll("ul").forEach((el) => {
            el.classList.add("mm-listview");
          });

          // Insert the cloned menu before #navigation
          navigation.parentNode.insertBefore(clonedMenu, navigation);

          // Initialize Mmenu
          const mmenu = new Mmenu(
            clonedMenu,
            {
              counters: true,
            },
            {
              offCanvas: {
                pageNodetype: "#wrapper",
              },
            }
          );

          const mmenuAPI = mmenu.API;

          // Set up the hamburger trigger click event
          const trigger = document.querySelector(".mmenu-trigger .hamburger");
          if (trigger) {
            trigger.addEventListener("click", () => {
              mmenuAPI.open();
            });
          }

          // Add event listeners to intercept <a> clicks and use React Router
          clonedMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", (e) => {
              e.preventDefault(); // Prevent default link behavior
              const href = link.getAttribute("href");
              if (href) {
                navigate(href); // Use React Router's navigate for client-side routing
                mmenuAPI.close(); // Optionally close the menu after navigating
              }
            });
          });
        }
      }

      // Add the mm-fullsubopen class to .mm-next elements
      document.querySelectorAll(".mm-next").forEach((el) => {
        el.classList.add("mm-fullsubopen");
      });
    };

    // Initialize the menu on mount
    mmenuInit();

    // Set up the resize listener
    const handleResize = () => {
      mmenuInit();
    };
    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]); // Add navigate to dependencies

  return null; // This component does not render anything itself
};

export default MobileMenu;
