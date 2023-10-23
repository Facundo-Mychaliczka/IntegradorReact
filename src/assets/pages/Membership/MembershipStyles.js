import styled from "styled-components";


export const AboutUswrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding-top: 20px;
    width: 100%;
    background-color: black;
    align-items: center;
    gap: 10px;
    & h4 {
        text-align: center;
        margin: 20px;
    }
`

export const StyledA = styled.a `
    color: blueviolet;
    border-bottom: solid white 1px;
`

export const AboutUsGral = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    width: 50%;
`

export const AboutUsMembership = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 90%;
    border-top: solid orangered 2px;
    border-bottom: solid orangered 2px;
    padding-top: 10px;
`

export const MembershipDescription = styled.div `
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
    gap: 20px;
    border-top: dotted white 2px;
    border-bottom: dotted white 2px;
    & h3 {
        color: gold;
    }
`

export const MembershipItemsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    gap: 20px;
    @media screen and ( max-width : 577px) {
        flex-direction: column;
    }
`

export const MembershipItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    gap: 10px;
`

export const MembershipImage = styled.img `
    width: 100px;
`

export const MembershipLevels = styled.div `
    display: flex;
    flex-direction: column;
    & h2 {
        color: orangered;
    }
`

export const LevelsDescription = styled.div `
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-top: solid orangered 2px;
`
