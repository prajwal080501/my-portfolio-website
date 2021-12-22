import styled from 'styled-components';

export const Img = styled.img`
  width:80%;
  height:100%;
  object-fit: cover;
  overflow: hidden;

  @media screen and (max-width: 640px) {
    width:65%;
  }
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media screen and (max-width: 640px) {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  align-items: center;s
}

`
export const BlogCard = styled.div`
transition: all 0.3s ease-in-out;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  padding:0px;
  width: 400px;
  border:5px soild white !mportant;
  height:720px;
  @media screen and (max-width: 640px) {
    width: 114%;
    align-self: center;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    transform: scale(1.05);
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  text-align:center;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  margin: 5px;
  @media screen and (max-width: 640px) {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:black;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #f0e79d;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
flex-direction: row;
margin: 5px;
`
export const Tag = styled.li`
width: fit-content;
color: white;

`

export const ProjectCount = styled.div`
width:fit-content;
height: fit-content;
padding: 8px;
margin-left: auto;
margin-right:70px;
background-color: #f0e79d;
color:black;
border-radius: 10px;

@media screen and (max-width:768px){
  margin-right:0px;
`