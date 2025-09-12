import { type IAuction } from "@auction/shared";
import { Group, Image, Paper, Stack, Text } from "@mantine/core";

import TableSkeleton from "../../../components/TableSkeleton";
import { useGetActiveAuctionsQuery } from "../dashboard/utility/slices/auction.service";

type ActiveAuctionProps = {
    auctionStatus?: string;
}

const DashboardAuctions = ({ auctionStatus }: ActiveAuctionProps) => {
    const { data: auctionList, isLoading } = useGetActiveAuctionsQuery(auctionStatus);

    if (isLoading) {
        return <TableSkeleton />
    }

    if (!auctionList) {
        return <>No Data found</>
    }

    return (
        <Stack
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="center"
            gap="md"
        >
            {
                auctionList?.length && auctionList.map((item: IAuction) => (
                    <Paper
                        withBorder
                        bdrs="xs"
                        key={item.id}
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