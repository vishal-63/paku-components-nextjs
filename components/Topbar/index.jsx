import { FiPhone, FiMail } from "react-icons/fi";
import {
  TopbarContainer,
  TopbarContent,
  TopbarIcons,
  TopbarText,
  TopbarWrapper,
} from "./TopbarElements";

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarContent>
        <TopbarWrapper>
          <TopbarIcons>
            <FiPhone />
          </TopbarIcons>
          <TopbarText>+91-8197302228</TopbarText>
          <TopbarText>+91-9023548954</TopbarText>
        </TopbarWrapper>
        <TopbarWrapper>
          <TopbarIcons>
            <FiMail />
          </TopbarIcons>
          <TopbarText>pakucomponents@gmail.com</TopbarText>
        </TopbarWrapper>
      </TopbarContent>
    </TopbarContainer>
  );
};

export default Topbar;
