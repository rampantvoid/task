import logo from "../assets/logo.svg";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState({ name: "John Doe" });

  return (
    <div className="w-full bg-[#edede9] flex p-2">
      <div className="flex lg:mx-[10%] w-full items-center justify-center gap-10">
        <img src={logo} alt="" />

        <Input
          type="search"
          className="focus-visible:ring-offset-0 focus-visible:ring-0 border-gray-300 w-[50%] hidden md:block"
          placeholder="Find the best deals for you"
        />

        <Select>
          <SelectTrigger className="w-32 focus-visible:ring-offset-0 focus-visible:ring-0 bg-transparent border-none text-muted-foreground hidden md:flex">
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
          </SelectContent>
        </Select>

        <p className="font-semibold hidden lg:block">{`Hello, ${user.name}`}</p>

        <div className="relative hidden md:block hover:cursor-pointer">
          <div className="t-0 absolute left-3">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-green-500 p-3 text-xs text-black font-bold">
              3
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="file: mt-4 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
