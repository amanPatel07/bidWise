import { Auction_STATUS, type IAuction } from "@auction/shared";
import { Image, Modal, ScrollArea, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import AppButton from "../../../components/Button";
import { useGetActiveAuctionsQuery } from "../dashboard/utility/slices/auction.service";
import AuctionCard from "./AuctionCard";

const BrowseAuction = () => {
    const { data: auctions, isLoading } = useGetActiveAuctionsQuery(Auction_STATUS.ACTIVE);
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedAuction, setSelectedAuction] = useState({} as IAuction);

    const handleClickEvent = (auction: IAuction) => {
        setSelectedAuction(auction);
        open();
    }

    if (isLoading) {
        return <></>
    }

    const rows = auctions?.length && auctions.map((auction: IAuction) => (
        <Table.Tr>
            <Table.Td>
                <Image
                    radius="md"
                    h={50}
                    w={50}
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                />
            </Table.Td>
            <Table.Td>{auction.title}</Table.Td>
            <Table.Td>{auction.description}</Table.Td>
            <Table.Td>{auction.currentPrice}</Table.Td>
            <Table.Td>
                <AppButton
                    intent="light"
                    onClick={() => handleClickEvent(auction)}
                >
                    Buy
                </AppButton>
            </Table.Td>
        </Table.Tr>
    ))

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Auction Detail"
                yOffset="10vh"
                xOffset={0}
            >
                <AuctionCard
                    auction={selectedAuction}
                />
            </Modal>
            <ScrollArea>
                <Table
                    stickyHeader
                    highlightOnHover
                >
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Image</Table.Th>
                            <Table.Th>Title</Table.Th>
                            <Table.Th>Description</Table.Th>
                            <Table.Th>Current Price</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {rows}
                    </Table.Tbody>
                </Table>
            </ScrollArea>
        </>
    );
}

export default BrowseAuction;