import Image from "next/image";
import {
  Container,
  TeamTitle,
  TeamWrapper,
  MemberCard,
  MemberDiv,
  MemberName,
  MemberPosition,
  SocialLink,
  SocialLinkWrapper,
} from "./TeamElements";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";

const Team = () => {
  return (
    <Container>
      <TeamTitle data-aos="fade-up">Meet Our Team</TeamTitle>
      <TeamWrapper data-aos="fade-up">
        <MemberCard>
          <MemberDiv>
            <Image src={team1} alt="team-member-1" layout="intrinsic" />
            <MemberName>Jeet Shah</MemberName>
            <MemberPosition>Director</MemberPosition>
            <SocialLinkWrapper>
              <SocialLink>
                <FaFacebookF />
              </SocialLink>
              <SocialLink>
                <FaTwitter />
              </SocialLink>
              <SocialLink>
                <FaGooglePlusG />
              </SocialLink>
              <SocialLink>
                <FaPinterestP />
              </SocialLink>
            </SocialLinkWrapper>
          </MemberDiv>
        </MemberCard>
        <MemberCard>
          <MemberDiv>
            <Image src={team2} alt="team-member-2" layout="intrinsic" />
            <MemberName>Lalit Shah</MemberName>
            <MemberPosition>CEO & Founder</MemberPosition>
            <SocialLinkWrapper>
              <SocialLink>
                <FaFacebookF />
              </SocialLink>
              <SocialLink>
                <FaTwitter />
              </SocialLink>
              <SocialLink>
                <FaGooglePlusG />
              </SocialLink>
              <SocialLink>
                <FaPinterestP />
              </SocialLink>
            </SocialLinkWrapper>
          </MemberDiv>
        </MemberCard>
        <MemberCard>
          <MemberDiv>
            <Image src={team3} alt="team-member-3" layout="intrinsic" />
            <MemberName>Vishal Shah</MemberName>
            <MemberPosition>Director</MemberPosition>
            <SocialLinkWrapper>
              <SocialLink>
                <FaFacebookF />
              </SocialLink>
              <SocialLink>
                <FaTwitter />
              </SocialLink>
              <SocialLink>
                <FaGooglePlusG />
              </SocialLink>
              <SocialLink>
                <FaPinterestP />
              </SocialLink>
            </SocialLinkWrapper>
          </MemberDiv>
        </MemberCard>
      </TeamWrapper>
    </Container>
  );
};

export default Team;
