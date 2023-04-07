import { Navbar,Text,Button ,Link} from "@nextui-org/react";
import {HcatLogo} from "./Logo";
import React from 'react';

function HcatNavbar() {
    return(
        <Navbar shouldHideOnScroll variant={"floating"}>
     <Navbar.Brand>
          <HcatLogo />
          <Text
            h1
            size={20}
            css={{
              textGradient: "45deg, #3F51B5 30%, $blue800 100%",
            }}
            weight="bold"
          >
        HCAT
      </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            登录
          </Navbar.Link>
          <Navbar.Item>
            <Button disabled auto flat as={Link} href="#">
              注册
            </Button>
          </Navbar.Item>
        </Navbar.Content>
     </Navbar>
    );
}
export default HcatNavbar;
