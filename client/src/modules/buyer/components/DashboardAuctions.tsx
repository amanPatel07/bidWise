import { type IAuction } from "@auction/shared";
import { Group, Image, Paper, Stack, Text } from "@mantine/core";

type ActiveAuctionProps = {
    auctions: IAuction[] | undefined;
    viewActiveAuction: boolean;
}

const DashboardAuctions = ({ auctions, viewActiveAuction }: ActiveAuctionProps) => {

    if (!auctions) {
        return <></>
    }

    return (
        <Stack
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="center"
            gap="md"
        >
            {
                auctions?.length && auctions.map((item: IAuction) => (
                    item.status === 'ACTIVE' &&
                    <Paper
                        withBorder
                        bdrs="xs"
                    >
                        <Group
                            p="sm"
                        >
                            <Image
                                radius="md"
                                h={50}
                                w={50}
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                            />
                            <Stack
                                justify="center"
                                gap={0}
                            >
                                <Group
                                    align=""
                                    p={0}
                                >
                                    <Text
                                        fz="md"
                                    >
                                        Current Price:
                                    </Text>
                                    <Text
                                        fz="md"
                                        fw="bold"
                                    >
                                        {item.currentPrice}
                                    </Text>
                                </Group>
                                <Group
                                    align=""
                                    p={0}
                                >
                                    <Text
                                        fz="md"
                                    >
                                        Ends In:
                                    </Text>
                                    <Text
                                        fz="md"
                                        fw="bold"
                                    >
                                        {item.endTime.toString()}
                                    </Text>
                                </Group>
                            </Stack>
                        </Group>
                    </Paper>
                ))
            }
        </Stack>
    );
}

export default DashboardAuctions;