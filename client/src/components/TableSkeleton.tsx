import { Flex, Group, Skeleton } from "@mantine/core";

const TableSkeleton = () => {
    return (
        <Flex
            direction="column"
            gap="md"
        >
            <Flex
                justify="space-between"
                gap="md"
            >
                <Skeleton height={40} width="50%" radius="sm" />
                <Skeleton height={40} width="50%" radius="sm" />
                <Skeleton height={40} width="50%" radius="sm" />
                <Skeleton height={40} width="50%" radius="sm" />
            </Flex>
            <Flex
                justify="space-between"
                gap="md"
            >
                <Skeleton height={40} width="50%" radius="sm" />
                <Skeleton height={40} width="50%" radius="sm" />
                <Skeleton height={40} width="50%" radius="sm" />
                <Skeleton height={40} width="50%" radius="sm" />
            </Flex>
            <Flex
                justify="space-between"
                gap="md"
            >
                <Skeleton height={40} width="50%" radius="sm" />
                <Skeleton height={40} width="50%" radius="sm" />
                <Skeleton height={40} width="50%" radius="sm" />
                <Skeleton height={40} width="50%" radius="sm" />
            </Flex>
        </Flex>
    );
}

export default TableSkeleton;