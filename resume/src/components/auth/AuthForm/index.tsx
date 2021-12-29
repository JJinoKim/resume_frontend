import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../css/palette';
import Input from '../../common/Input';
import Button from '../../common/Button';

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
 */
const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
        color: ${palette.gray[9]};
    }
    }
`;


interface IProps {
    title : string
}

const AuthForm = ({title} : IProps) => {
    return (
        <AuthFormBlock>
            <h3>로그인</h3>
            <form>
                <Input
                    autoComplete='username'
                    name='username'
                    placeholder='아이디'
                />
                <Input
                    autoComplete='new-password'
                    name='password'
                    placeholder='비밀번호'
                    type='password'
                />
                <Button
                    onClick={()=>console.log('s')}
                    title='로그인'
                />
            </form>
            <Footer>
                <Link to="/register">회원가입</Link>
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;