import { NavLink } from "react-router";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";



export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const MyNavbar = () => {
  return (
    <Navbar isBordered>

        <NavbarBrand className="mr-4">
          <NavLink>
            <img src="/Img/main-logo.png" alt="" />
          </NavLink>
        </NavbarBrand>

        <NavbarContent>
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[750px] h-12", // Adjusted width and height for larger size
                mainWrapper: "h-full",
                input: "text-medium w-[]", // Adjusted text size
                inputWrapper:
                  "h-full py-4 px-[5px] font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-lg", // Added padding and adjusted styles
              }}
              placeholder="restaurant, hotel, service...."
              size="lg" // Increased size (adjust based on design)
              endContent={
                <span className="bg-primary rounded-full w-11 h-9 flex items-center justify-center cursor-pointer">
                  <SearchIcon
                    className="text-white hover:text-secondary"
                    size={20} // Increased size of the SearchIcon
                  />
                </span>
              }
              type="search"
            />
        </NavbarContent>
      

        <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
          MyFeedback for business
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MyNavbar;
