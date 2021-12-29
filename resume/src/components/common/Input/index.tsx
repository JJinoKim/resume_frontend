import styled from 'styled-components';
import palette from '../../../css/palette';


/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
}
`;

interface IProps {
    autoComplete : string,
    name : string,
    placeholder : string,
    type? : string
}

const Input = ({autoComplete,name,placeholder,type} : IProps) => {
    return (
        <div>
            <StyledInput
                autoComplete={autoComplete}
                name={name}
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
};

export default Input;