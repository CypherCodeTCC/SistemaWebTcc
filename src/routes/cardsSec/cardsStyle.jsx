import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 40px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;

    .cards{
        flex-grow: 1;
        height: 260px;
        width: 260px;
        padding: 20px;
        border-radius: 8px;
        background-image: linear-gradient(to top, #f2f0f1 20%, #f2f0f1 100%);

        p{
            width: max-content;
            padding-top: 20px; 
        }
    }
`

