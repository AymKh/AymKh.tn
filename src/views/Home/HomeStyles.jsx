import styled from 'styled-components';

const HomeLayout = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    header{
        text-align: left;
        width: 700px;
        margin-bottom: 1rem;
    }
    
    main{
        width: 700px;
        /* border-width: 2px;
        border-style: solid;
        border-image: linear-gradient(71.18deg, rgb(0, 34, 255) -27.32%, rgb(0, 34, 255) -16.39%, rgb(81, 121, 254) -7.38%, rgb(165, 237, 182) 30.59%, rgb(250, 232, 90) 46.06%, rgb(253, 172, 62) 62.61%, rgb(255, 92, 0) 75.82%) 1;
        border-radius: .5rem; */
    }
`;

export default HomeLayout;