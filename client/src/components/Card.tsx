import { Card, Group, Image, Text } from '@mantine/core';

const DetailCard = () => {
    return (
        <Card>
            <Card.Section>
                <Image>
                </Image>
            </Card.Section>
            <Group>
                <Text>Apple Macbook</Text>
            </Group>
            <Group>
                <Text>Current bid</Text>
                <Text>$1,200</Text>
            </Group>
            <Text>Ends in 2 hours</Text>
        </Card>
    )
}

export default DetailCard;