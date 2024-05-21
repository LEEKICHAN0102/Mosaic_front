import styled from "styled-components";
import peopleImage from "@/assets/mosaikImage.png";

interface SectionProps {
  color: string;
}

export default function Home() {
  return (
    <HomeMain>
      <HomeSection color="#FFFAE0">
        <SectionText>
          <h1>
            여러 지역의
            <br />
            다양한 사람들과 소통해요!
          </h1>
          <span>
            모자이크는 서로의 문화를 이해하고 받아들이는
            <br />
            문화 상대주의를 기반으로 운영되는 커뮤니티 입니다.
            <br />
            서로에게 궁금한 것을 질문하며 소통하세요!
          </span>
        </SectionText>
        <img src={peopleImage} />
      </HomeSection>
      <HomeSection color="#F9F9F9">

      </HomeSection>
      <HomeSection color="#FFF8F1">

      </HomeSection>
      <HomeSection color="#F6FDEC">

      </HomeSection>
    </HomeMain>
  );
}

const HomeMain = styled.div`
  width: 100%;
  height: 1000vh;
  background-color: orange;
`;

const HomeSection = styled.section<SectionProps>`
  padding-top: 24px;
  width: inherit;
  height: 10%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  img{
    width: 400px;
    height: 400px;
  }
`;

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 50px;
  h1{
    font-size: 54px;
    font-weight: 700;
  }
  span{
    font-size: 16px;
    font-weight: 700;
    color: gray;
  }
`;