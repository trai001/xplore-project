import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";

const Popular = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Logo source={props.logo} />
      <Wrapper>
      <Caption>{props.caption}</Caption>
      <Subtitle>{props.subtitle}</Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

export default Popular;

const Content = styled.View`
padding-left: 30px;
flex-direction: row;
align-items: center;
height: 70px;
`;

const Logo = styled.Image`
width: 44px;
height: 44px;
`;

const Caption = styled.Text`
color: #006D77;
font-weight: 600;
font-size: 14px;
text-transform: uppercase;
`;

const Subtitle = styled.Text`
color: #000000;
font-size: 12px;
font-weight: 600;
margin-top: 50px;
margin-left: 30px;
`;

const Wrapper = styled.Text`
margin-left: 10px;
`;

const Container = styled.View`
background: white;
width: 315px;
height: 280px;
border-radius: 14px;
margin-left: 20px;
margin-top: 20px;
box-shadow: 0 5px 15px rgba(0,0,0, 0.15);
`;

const Cover = styled.View`
width: 100%;
height: 200px;
border-top-left-radius: 14px;
border-top-right-radius: 14px;
overflow: hidden;

`;

const Image = styled.Image`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
`;

const Title = styled.Text`
color: white;
font-size: 22px;
font-weight: bold;
margin-top: 20px;
margin-left: 20px;
width: 170px;
`;





// import React from "react";
// import styled from "styled-components/native";

// const Saved =props=> (
//     <Container>
//         <Cover>
//             <Image source ={props.image}/>
//             <Logo source ={props.logo}/>
//             <Subtitle>{props.subtitle}</Subtitle>
//             <Title>{props.title}</Title>
//         </Cover>
//         <Content>
//             <Avatar source={props.avatar}/>
//             <Caption>{props.caption}</Caption>
//             <Name>{props.name} </Name>
//         </Content>
//     </Container>
// )

// export default Saved;

// const Content = styled.View`
// padding-left: 20px;
// flex-direction: row;
// align-items: center;
// height: 80px;
// `;

// const Logo = styled.Image`
// width: 44px;
// height: 44px;
// `;

// const Caption = styled.Text`
// color: #006D77;
// font-weight: 600;
// font-size: 14px;
// text-transform: uppercase;
// `;

// const Subtitle = styled.Text`
// color: #000000;
// font-size: 13px;
// font-weight: 600;
// margin-top: 50px;
// margin-left: 20px;
// `;

// // const Wrapper = styled.Text`
// // margin-left: 10px;
// // `;

// const Container = styled.View`
// background: white;
// width: 315px;
// height: 280px;
// border-radius: 14px;
// margin-left: 20px;
// margin-top: 20px;
// box-shadow: 0 5px 15px rgba(0,0,0, 0.15);
// `;

// const Cover = styled.View`
// width: 100%;
// height: 200px;
// border-top-left-radius: 14px;
// border-top-right-radius: 14px;
// overflow: hidden;

// `;

// const Image = styled.Image`
// width: 100%;
// height: 100%;
// position: absolute;
// top: 0;
// left: 0;
// `;

// const Title = styled.Text`
// color: white;
// font-size: 22px;
// font-weight: bold;
// margin-top: 20px;
// margin-left: 20px;
// width: 170px;
// `;

// // const Container= styled.View``
// //    width=315;
// //    height=335;
// // `;
// // const Cover= styled.View`
// // height= 216;
// // `;
// // const Image= styled.Image``;
// // const Logo= styled.Image``;
// // const Title = styled.Text``;
// // const Subtitle= styled.Text``;
// // const Content= styled.View``;
// // const Avatar= styled.Image``;
// // const Caption=styled.Text``;
// // const Name=styled.Text`
// // `;

