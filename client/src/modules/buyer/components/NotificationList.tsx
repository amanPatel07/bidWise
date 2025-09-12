import { Button, ColorSwatch, Group, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

type NotificationListProps = {
    colorSwatchColor: string;
    colorSwatchSize: number;
    groupJustify: string;
    text: string;
    btnVariant: string;
    btnSize: string;
    btnPx: number;
    iconColor: string;
    iconSize: number;
};

const NotificationList = ({
    colorSwatchColor,
    colorSwatchSize,
    groupJustify,
    text,
    btnVariant,
    btnPx,
    btnSize,
    iconColor,
    iconSize,
}: NotificationListProps) => {
    return (
        <Group justify={groupJustify}>
            <Group>
                <ColorSwatch color={colorSwatchColor} size={colorSwatchSize} />
                <Text>{text}</Text>
            </Group>
            <Button variant={btnVariant} size={btnSize} px={btnPx}>
                <IconChevronRight color={iconColor} size={iconSize} />
            </Button>
        </Group>
    );
};

export default NotificationList;
