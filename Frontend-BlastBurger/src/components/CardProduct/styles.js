import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 30px;
    background-color: #f0f0f0;
    border-radius: 8px;
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 91%;
    margin-bottom: 30px;

    div {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2px;
        margin-top: 0;
        p {
            font-size: 18px;
            color: #ff8c05;
            line-height: 50px;
            font-weight: 700;
            margin-top: 40px;
        }

        strong {
            font-size: 22px;
            color: #363636;
            font-weight: 800;
            line-height: 20px;
        }
    }
`

export const CardImage = styled.img`
    width: 150px;
    height: auto;
`