import { Grid, Paper, ScrollArea, Stack, Text, Title } from "@mantine/core";

import TableSkeleton from "../../../components/TableSkeleton";
import BuyerStats from "../components/BuyerStats";
import DashboardAuctions from "../components/DashboardAuctions";
import NotificationList from "../components/NotificationList";
import SectionHeader from "../components/SectionHeader";
import { useGetActiveAuctionsQuery } from "./utility/slices/auction.service";

const BuyerDashboard = () => {

    const { data: auctionList, isLoading } = useGetActiveAuctionsQuery();

    if (isLoading) {
        return <TableSkeleton />
    }

    return (
        <>
            <Title
                order={3}
                pb="md"
            >
                Buyer Dashboard
            </Title>
            <Grid
                h="100%"
                overflow="hidden"
                grow
            >
                <Grid.Col
                    span={{ base: 12, sm: 12, md: 6 }}
                    h={270}
                >
                    <Paper
                        shadow="lg"
                        p="md"
                        withBorder
                        h="100%"
                    >
                        <SectionHeader
                            title="Buyer Stats"
                            btnText="View All"
                        />
                        <BuyerStats />
                    </Paper>
                </Grid.Col>
                <Grid.Col
                    span={{ base: 12, sm: 12, md: 6 }}
                    h={270}
                >
                    <Paper
                        shadow="lg"
                        p="md"
                        withBorder
                        h="100%"
                        display="flex"
                        style={{flexDirection: 'column'}}
                    >
                        <SectionHeader
                            title="Active Auctions"
                            btnText="View All"
                        />
                        <ScrollArea>
                            <DashboardAuctions
                                auctions={auctionList}
                                viewActiveAuction={true}
                            />
                        </ScrollArea>
                    </Paper>
                </Grid.Col>
                <Grid.Col
                    span={{ base: 12, sm: 12, md: 6 }}
                    h={270}
                >
                    <Paper
                        shadow="lg"
                        p="md"
                        withBorder
                        h="100%"
                    >
                        <SectionHeader
                            title="Auctions"
                            btnText="View All"
                        />
                        <Stack
                            bg="var(--mantine-color-body)"
                            align="stretch"
                            justify="center"
                            gap="md"
                        >
                            <Text>Sony Headphones | Current Price: $120 | Ends in: 3h</Text>
                            <Text>MacBook Air | Current Price: $950 | Ends in: 12h</Text>
                            <Text>Total Spent</Text>
                            <Text>Collectible Watch | Current Price: $2,000 | Ends in: 2d</Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col
                    span={{ base: 12, sm: 12, md: 6 }}
                    h={270}
                >
                    <Paper
                        shadow="lg"
                        p="md"
                        withBorder
                        h="100%"
                    >
                        <SectionHeader
                            title="Notification"
                            btnText="View All"
                        />
                        <Stack
                            bg="var(--mantine-color-body)"
                            align="stretch"
                            justify="center"
                            gap="md"
                        >
                            <NotificationList
                                colorSwatchColor="var(--mantine-color-primary-4)"
                                colorSwatchSize={15}
                                groupJustify="space-between"
                                text="You’ve been out bid on iPhone 15 Pro"
                                btnVariant="filled"
                                btnSize="compact-xs"
                                btnPx={1}
                                iconColor="white"
                                iconSize={20}
                            />
                            <NotificationList
                                colorSwatchColor="var(--mantine-color-primary-4)"
                                colorSwatchSize={15}
                                groupJustify="space-between"
                                text="You’ve been out bid on iPhone 15 Pro"
                                btnVariant="filled"
                                btnSize="compact-xs"
                                btnPx={1}
                                iconColor="white"
                                iconSize={20}
                            />
                            <NotificationList
                                colorSwatchColor="var(--mantine-color-primary-4)"
                                colorSwatchSize={15}
                                groupJustify="space-between"
                                text="You’ve been out bid on iPhone 15 Pro"
                                btnVariant="filled"
                                btnSize="compact-xs"
                                btnPx={1}
                                iconColor="white"
                                iconSize={20}
                            />
                            <NotificationList
                                colorSwatchColor="var(--mantine-color-primary-4)"
                                colorSwatchSize={15}
                                groupJustify="space-between"
                                text="You’ve been out bid on iPhone 15 Pro"
                                btnVariant="filled"
                                btnSize="compact-xs"
                                btnPx={1}
                                iconColor="white"
                                iconSize={20}
                            />
                        </Stack>
                    </Paper>
                </Grid.Col>
            </Grid>
        </>
    );
}

export default BuyerDashboard;