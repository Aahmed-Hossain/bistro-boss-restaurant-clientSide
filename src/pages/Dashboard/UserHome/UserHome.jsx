import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className="text-3xl">Hi , Welcome</h2>
            <div>
                    {
                        user?.displayName ? user?.displayName : 'Back'
                    }
            </div>
        </div>
    );
};

export default UserHome;