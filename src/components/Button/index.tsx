import React from 'react';
import { ButtonContainer } from '../../components/Button/styles';

interface IButtonProps {
    title: string;
    onClick: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ title, onClick, disabled }) => {
    return (
        <ButtonContainer onClick={onClick} disabled={disabled}>
            {title}
        </ButtonContainer>
    );
};

export default Button;
