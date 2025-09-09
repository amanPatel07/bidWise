import { Group, Stack, Text } from "@mantine/core";

const BuyerStats = () => {
    return (
        <Stack
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="center"
            gap="md"
        >
            <Group>
                <Text>Bid Placed:</Text>
                <Text
                    fw="bold"
                >
                    1
                </Text>
            </Group>
            <Group>
                <Text>Auctions Won:</Text>
                <Text
                    fw="bold"
                >
                    1
                </Text>
            </Group>
            <Group>
                <Text>Total Spent:</Text>
                <Text
                    fw="bold"
                >
                    1
                </Text>
            </Group>
            <Group>
                <Text>Active Bids:</Text>
                <Text
                    fw="bold"
                >
                    1
                </Text>
            </Group>
        </Stack>
    );
}

export default BuyerStats;