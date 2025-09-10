import { Group, Text, Title, UnstyledButton } from "@mantine/core";

type SectionHeaderProps = {
    title: string;
    btnText: string;
    showViewAll: boolean;
    handleViewAllClick: () => void
}

const SectionHeader = ({
    title,
    btnText,
    showViewAll,
    handleViewAllClick
}: SectionHeaderProps) => {
    return (
        <Group
            justify="space-between"
            align="center"
            mb="md"
            style={{ borderBottom: "1px solid var(--mantine-color-gray-3)" }}
        >
            <Title
                order={4}
                title="Notification"
            >
                {title}
            </Title>
            {
                showViewAll &&
                <UnstyledButton
                    onClick={handleViewAllClick}
                >
                    <Text
                        c="primary.6"
                    >
                        {btnText}
                    </Text>
                </UnstyledButton>
            }
        </Group>
    );
}

export default SectionHeader;