import { NavLink } from "react-router";
import { FcGlobe } from "react-icons/fc";
import { SearchIcon } from "../Icon";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  Button,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { users } from "../../lib/utils";







const MyNavbar = () => {
  return (
    <Navbar isBordered maxWidth="full" className="px-4 pt-[30px] pb-[15px]">
          <NavbarBrand>
            <div className="w-32 sm:w-36 lg:w-fit">
                <NavLink to="/">
                  <img
                    className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto"
                    src="/Img/main-logo.png"
                    alt="Website Main Logo"
                  />
                </NavLink>
            </div>
          </NavbarBrand>
    
          <NavbarContent className="hidden md:flex">
            <Autocomplete
              aria-label="Select an employee"
              classNames={{
                base: "max-w-2xl",
                listboxWrapper: "max-h-[320px]",
                selectorButton: "text-default-500",
              }}
              defaultItems={users}
              inputProps={{
                classNames: {
                  input: "ml-1",
                  inputWrapper: "h-[51px] py-4 pe-[23px] ps-[5px]",
                },
              }}
              listboxProps={{
                hideSelectedIcon: true,
                itemClasses: {
                  base: [
                    "rounded-medium",
                    "text-default-500",
                    "transition-opacity",
                    "data-[hover=true]:text-foreground",
                    "dark:data-[hover=true]:bg-default-50",
                    "data-[pressed=true]:opacity-70",
                    "data-[hover=true]:bg-default-200",
                    "data-[selectable=true]:focus:bg-default-100",
                    "data-[focus-visible=true]:ring-default-500",
                  ],
                },
              }}
              placeholder="restaurant, hotel, service....       |   Singapour..."
              className="primary_light text-xs md:text-[16.5px] md:leading-[19.34px]"
              popoverProps={{
                offset: 10,
                classNames: {
                  base: "rounded-large",
                  content: "p-1 border-small border-default-100 bg-background",
                },
              }}
              radius="full"
              startContent={
                <span className="bg-primary rounded-full w-11 h-[30px] lg:h-[35px] hidden md:flex items-center justify-center cursor-pointer">
                    <SearchIcon
                      className="text-white"
                      size={20}
                      strokeWidth={2.5}
                    />
                </span>
              }
              variant="bordered"
            >
              {(item) => (
                <AutocompleteItem key={item.id} textValue={item.name}>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Avatar
                        alt={item.name}
                        className="flex-shrink-0 "
                        size="sm"
                        src={item.avatar}
                      />
                      <div className="flex flex-col">
                        <span className="text-secondary text-xs sm:text-base md:text-[19px] md:leading-[22.27px] font-body">{item.name}</span>
                      </div>
                    </div>
                    <Button
                      className="border-small mr-0.5 font-medium shadow-small font-body"
                      radius="full"
                      size="sm"
                      variant="bordered"
                    >
                      Add
                    </Button>
                  </div>
                </AutocompleteItem>
              )}
            </Autocomplete>
          </NavbarContent>

      <NavbarContent justify="end" >
        <NavbarItem className="hidden sm:flex">
          <NavLink to="#">
            <FcGlobe size={35} />
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to="#">
            <Button
              as={Link}
              size="md"
              color="primary"
              radius="full"
              href="#"
              variant="flat"
              className="bg-secondary text-white text-[15.5px] leading-[18.16px]"
            >
              MyFeedback for business
            </Button>
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MyNavbar;
