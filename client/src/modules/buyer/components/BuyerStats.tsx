import { Group, Stack, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { useGetDashboardStatsQuery } from '../utlity/slices/dashboard.service';

const BuyerStats = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const { data: userStats, isLoading } = useGetDashboardStatsQuery(user?.id, { skip: !user.id });

    if (isLoading) <></>;

    return (
        <Stack bg="var(--mantine-color-body)" align="stretch" justify="center" gap="md">
            <Group>
                <Text>Bid Placed:</Text>
                <Text fw="bold">{userStats?.bidPlaced}</Text>
            </Group>
            <Group>
                <Text>Auctions Won:</Text>
                <Text fw="bold">{userStats?.auctionsWon}</Text>
            </Group>
            <Group>
                <Text>Total Spent:</Text>
                <Text fw="bold">{userStats?.totalSpent}</Text>
            </Group>
            <Group>
                <Text>Active Bids:</Text>
                <Text fw="bold">{userStats?.activeBids}</Text>
            </Group>
        </Stack>
    );
};

export default BuyerStats;
