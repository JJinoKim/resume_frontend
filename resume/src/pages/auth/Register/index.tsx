import React from 'react';
import AuthTemplate from '../../../components/auth/AuthTemplate';
import AuthFormContainer from '../../../container/auth/AuthFormContainer';

const index = () => {
    return (
        <AuthTemplate>
            <AuthFormContainer/>
        </AuthTemplate>
    );
};

export default index;