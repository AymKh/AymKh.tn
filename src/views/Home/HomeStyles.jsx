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

    #links{
        a{
            display: inline-block;
            width: 30px;
            height: 30px;
            font-size: 1.5rem;
            text-decoration: none;
            color: red;

            &:first-child{
                font-size: 1.3rem;
            }

            &:hover{
                text-decoration: underline;
                color: blue;
            }
        }
    }
    
    main{
        width: 700px;
    }
`;

export default HomeLayout;