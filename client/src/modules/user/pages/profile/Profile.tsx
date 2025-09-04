import { useGetUserByIdQuery } from "./utility/slices/userApiSlice";

const Profile = () => {
    const { data, isLoading } = useGetUserByIdQuery('0ef8aa09-7ab1-4b8b-b17c-91265780ebae');

    console.log(data, isLoading)
    return (
        <>
        </>
    );
}

export default Profile;