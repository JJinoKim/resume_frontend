import styled, {css} from "styled-components";
import palette from "../../../css/palette";


interface ContainerProps {
    btInput: boolean| undefined
}


const StyledButton = styled.button<ContainerProps>`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: ${palette.gray[8]};
    &:hover {
        background: ${palette.gray[6]};
    }
    ${props => props.btInput &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `
    }
    ${props => props.btInput &&
        css`
            background: ${palette.cyan[5]};
            &:hover {
                background: ${palette.cyan[4]};
            }
        `
    }

`;

interface IProps {
    onClick : () => void,
    title : string,
    width? : boolean | undefined
}

const Button = ({onClick, title, width} : IProps) => {
    return (
        <StyledButton
            onClick={onClick}
            btInput={true}
        >
            {title}
        </StyledButton>
    );
};

export default Button;