import { Button, type ButtonProps } from '@mantine/core';
type Intent = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light';

interface AppButtonProps extends ButtonProps {
    intent: Intent;
    onClick: () => void;
}

const AppButton = ({ intent, onClick, ...props }: AppButtonProps) => {
    const intentMap: Record<string, Partial<ButtonProps>> = {
        primary: { variant: 'filled', color: 'primary' },
        light: { variant: 'light', color: 'primary' },
    };
    const styleProps = intentMap[intent] || intentMap.primary;

    return <Button onClick={onClick} bdrs="xs" {...styleProps} {...props} />;
};

export default AppButton;
