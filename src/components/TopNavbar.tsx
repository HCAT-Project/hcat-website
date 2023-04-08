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
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="https://docs.hcat.online/">
              文档
            </Button>
          </Navbar.Item>
        </Navbar.Content>
     </Navbar>
    );
}
export default HcatNavbar;
