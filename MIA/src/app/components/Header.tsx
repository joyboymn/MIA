'use client'
import { Stack } from "@mui/material";
import Link from "next/link";

const navs = [
  {
    link: "/",
    title: "Home",
  },
  { link: "/about", title: "About" },
  { link: "/download", title: "Download" },
  { link: "/contact", title: "Contact" },
];

const Header = () => {
  return (
    <div>
      <div>
        <img src="./content/memok.png" alt="" id="cs1-image" />

        <Stack direction="row" spacing={2}>
        {navs.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              {item.title}
            </Link>
          );
        })}
</Stack>





        <img src="/facebook.png" alt="facebook" />
        <img src="./Instagram.png" alt="instagram" />
        <img src="./Youtube.png" alt="youtube" />
        <img src="./Twitter.png" alt="twitter" />
        <img src="../English.png" alt="English" />
      </div>
    </div>
  );
};

export default Header;
