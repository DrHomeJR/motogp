import styled from 'styled-components';

const Button = styled.button`
        color: #FFA000;
        background: #FFF;
        font-size: 1em;
        font-weight: bold;
        margin: 1em;
        padding: 0.50em 2em;
        border: 2px solid #FFA000;
        border-radius: 3px;
        &:hover {
                cursor: pointer;
                background: #FFA000;
                color: #FFF;
        }`;
export default Button;