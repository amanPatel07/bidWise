import { Grid, Paper, ScrollArea, Stack, Title } from "@mantine/core";
import { Auction_STATUS } from "@auction/shared";
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------- //
import BuyerStats from "../components/BuyerStats";
import DashboardAuctions from "../components/DashboardAuctions";
import NotificationList from "../components/NotificationList";
import SectionHeader from "../components/SectionHeader";

const BuyerDashboard = () => {

    const navigate = useNavigate();

    const handleNavigate = (url: string) => {
        navigate(url);
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
                            showViewAll={false}
                            handleViewAllClick={() => handleNavigate('activeAuction')}
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
                        style={{ flexDirection: 'column' }}
                    >
                        <SectionHeader
                            title="Active Auctions"
                            btnText="View All"
                            showViewAll={true}
                            handleViewAllClick={() => handleNavigate('auctions')}
                        />
                        <ScrollArea>
                            <DashboardAuctions
                                auctionStatus={Auction_STATUS.ACTIVE}
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
                        display="flex"
                        style={{ flexDirection: 'column' }}
                    >
                        <SectionHeader
                            title="Auctions"
                            btnText="View All"
                            showViewAll={true}
                            handleViewAllClick={() => handleNavigate('browse')}
                        />
                        <ScrollArea>
                            <DashboardAuctions />
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
                            title="Notification"
                            btnText="View All"
                            showViewAll={true}
                            handleViewAllClick={() => handleNavigate('activeAuction')}
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