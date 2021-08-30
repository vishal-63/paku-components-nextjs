import {
  Container,
  TeamTitle,
  TeamWrapper,
  MemberCard,
  MemberDiv,
  MemberImage,
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
            <MemberImage src={team1.src} alt="team-member-1"></MemberImage>
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
            <MemberImage src={team2.src} alt="team-member-2"></MemberImage>
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
            <MemberImage src={team3.src} alt="team-member-3"></MemberImage>
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
