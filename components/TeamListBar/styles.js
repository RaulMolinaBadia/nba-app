import styled from '@emotion/styled'

// export const TeamListBarWrapper = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 2.65rem;
//     align-items: center;
//     padding: 0 10px;
//     height: 3.125rem;
// `

// export const Logo = styled.img`
//     position: fixed;
//     width: 1.75rem;
//     height: 1.75rem;
//     :hover {
//         width: 2rem;
//         height: 2rem;
//     }
// `

export const TeamListBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 3.125rem;
    flex-wrap: wrap;
`

export const Logo = styled.img`
    width: 2rem;
    height: 2rem;
    :hover {
        transform: scale(1.5);
    }
`
