import styled, {keyframes} from "styled-components";


export const Container = styled.div`
position: relative;
width: 900px;
display: flex;
flex-direction: row;
justify-content: space-around;
justify-self: center;
margin: auto;

@media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
}


`;

export const Card = styled.div`
position: relative;
width: 250px;
background: linear-gradient(0deg, #151430, #151430, #151430);
padding: 10px;
border-radius: 10px;
transition : all 0.5s ease;
display: flex;
justify-content: center;
align-items: center;
height: 250px;
text-align: center;
overflow: hidden;

&:hover{
    transition : all 0.5s ease;
    background: linear-gradient(0deg, #0f0e2b, #0f0e2b, #0f0e2b);
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);
    transform: translateY(-10px);

}
@media screen and (max-width:768px){
    margin: auto;
    margin-top: 15px;
    width: 80%;
    font-size:2rem;
}

`

export const Box = styled.div`
width: fit-content;
align-items: center;
margin: auto;

`;

export const Percentage = styled.div`
position: relative;
width: 150px;
height: 150px;
border-radius: 50%;
box-shadow: inset 0 0 50px #000;
background; #222;
z-index:1000;
`;

export const Circle = styled.circle`
width: 100%;
height: 100%;
fill: none;
stroke: #191919;
`

export const Number = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius:50%;

&:hover{
}
`;

export const CardTitle = styled.h2`
position: relative;
color: #f0e79d;
font-weight: 700;
padding: 5px;
font-size: 18px;
margin-top: 8%;

&:hover{
    color: #fff;
}
@media screen and (max-width: 768px){
    font-size:2rem;

}
`;


export const Digits = styled.h2`
color: #777;
font-weight: 700;
font-size: 30px;
transition: all 0.5s ease-in-out;


`;
