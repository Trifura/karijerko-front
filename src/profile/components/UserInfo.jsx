export default function UserInfo({ user, isPublic }) {
    return (
        <div className="p-8 flex justify-between">
            <div className="flex gap-4 items-center">
                <img src={user.profilePicture} className="w-20 h-20 rounded-full" alt=""/>
                <div className="flex flex-col gap-1.5">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-2xl lg:text-4xl font-semibold">
                            { user.firstName } { user.lastName }
                        </h1>

                        <div className="lg:hidden">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.25 9L15.42 6.9075L15.675 4.14L12.9675 3.525L11.55 1.125L9 2.22L6.45 1.125L5.0325 3.5175L2.325 4.125L2.58 6.9L0.75 9L2.58 11.0925L2.325 13.8675L5.0325 14.4825L6.45 16.875L9 15.7725L11.55 16.8675L12.9675 14.475L15.675 13.86L15.42 11.0925L17.25 9ZM7.035 12.0075L5.25 10.2075C4.9575 9.915 4.9575 9.4425 5.25 9.15L5.3025 9.0975C5.595 8.805 6.075 8.805 6.3675 9.0975L7.575 10.3125L11.4375 6.4425C11.73 6.15 12.21 6.15 12.5025 6.4425L12.555 6.495C12.8475 6.7875 12.8475 7.26 12.555 7.5525L8.115 12.0075C7.8075 12.3 7.335 12.3 7.035 12.0075Z"
                                    fill="#1F57C3"/>
                            </svg>
                        </div>
                        <div className="hidden lg:inline">
                            <svg width="28" height="28" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.25 9L15.42 6.9075L15.675 4.14L12.9675 3.525L11.55 1.125L9 2.22L6.45 1.125L5.0325 3.5175L2.325 4.125L2.58 6.9L0.75 9L2.58 11.0925L2.325 13.8675L5.0325 14.4825L6.45 16.875L9 15.7725L11.55 16.8675L12.9675 14.475L15.675 13.86L15.42 11.0925L17.25 9ZM7.035 12.0075L5.25 10.2075C4.9575 9.915 4.9575 9.4425 5.25 9.15L5.3025 9.0975C5.595 8.805 6.075 8.805 6.3675 9.0975L7.575 10.3125L11.4375 6.4425C11.73 6.15 12.21 6.15 12.5025 6.4425L12.555 6.495C12.8475 6.7875 12.8475 7.26 12.555 7.5525L8.115 12.0075C7.8075 12.3 7.335 12.3 7.035 12.0075Z"
                                    fill="#1F57C3"/>
                            </svg>
                        </div>
                    </div>
                    {
                        user.location && (
                            <div className="flex gap-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M12.2656 19.8716C13.5438 19.2283 19 16.1789 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 16.1789 10.4562 19.2283 11.7344 19.8716C11.904 19.957 12.096 19.957 12.2656 19.8716ZM11.9999 14C13.6568 14 14.9999 12.6569 14.9999 11C14.9999 9.34316 13.6568 8.00002 11.9999 8.00002C10.3431 8.00002 8.99994 9.34316 8.99994 11C8.99994 12.6569 10.3431 14 11.9999 14Z"
                                          fill="#676767"/>
                                </svg>
                                <p className="text-base text-Ironside font-medium">{user.location}, Hrvatska</p>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                !isPublic && (
                    <div className="flex items-center">
                        <a href={`/u/${user.slug}`} target="_blank"
                           className="bg-PrimaryDark text-white font-bold rounded-full py-1 px-4 flex items-center gap-2">
                            Pregled profila
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.75 14.25H4.25V3.75H9.5V2.25H4.25C3.4175 2.25 2.75 2.925 2.75 3.75V14.25C2.75 15.075 3.4175 15.75 4.25 15.75H14.75C15.575 15.75 16.25 15.075 16.25 14.25V9H14.75V14.25ZM11 2.25V3.75H13.6925L6.32 11.1225L7.3775 12.18L14.75 4.8075V7.5H16.25V2.25H11Z"
                                    fill="white"/>
                            </svg>
                        </a>
                    </div>
                )
            }
        </div>
    )
}