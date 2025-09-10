import { Auction_STATUS, type IAuction } from "@auction/shared";
import { Badge, Container, Group, NumberInput, Paper, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { useSelector } from "react-redux";
// --------------------------------------------------------------------------------------------------- //
import AppButton from "../../../components/Button";
import type { RootState } from "../../../store/store";
import { usePlaceBidMutation } from "../dashboard/utility/slices/bid.service";

type AuctionCardProp = {
    auction?: IAuction
}

const AuctionCard = ({ auction }: AuctionCardProp) => {
    const [bidAmount, setBidAmount] = useState<number | undefined>();
    const user = useSelector((state: RootState) => state.user.user)
    const [placeBid, { isLoading: isPlacing }] = usePlaceBidMutation();

    if (!auction) {
        return <>No Auction Found !</>
    }

    const handlePlaceBid = async () => {
        if (!bidAmount) return;
        try {
            await placeBid({ auctionId: auction.id, amount: bidAmount, userId: user.id })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container size='md'>
            <Paper shadow='sm' p='lg' radius='md' withBorder>
                <Group
                    justify='space-between'
                >
                    <Title order={2}>{auction.title}</Title>
                    <Badge color={auction.status === Auction_STATUS.ACTIVE ? 'green' : 'gray'}>
                        {auction.status}
                    </Badge>
                </Group>

                <Text mt='sm' c='dimmed'>
                    {auction.description}
                </Text>

                <Text fw={600} mt='md'>
                    Current Price: ${auction.currentPrice ?? auction.startingPrice}
                </Text>

                <Stack mt='lg'>
                    <NumberInput
                        label="Enter your bid"
                        placeholder="Enter amount"
                        value={bidAmount && bidAmount + 1}
                        onChange={(val) => setBidAmount(val as number)}
                        min={auction.currentPrice ?? auction.startingPrice}
                    />
                    <AppButton
                        intent="primary"
                        loading={isPlacing}
                        onClick={handlePlaceBid}
                        disabled={auction.status !== "ACTIVE"}
                    >
                        Place Bid
                    </AppButton>
                </Stack>
            </Paper>
        </Container>
    );
}

export default AuctionCard;