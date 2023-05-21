import React, { useState } from 'react'
import { BASE_URL } from '../constant/constant';

export default function Users() {
    const [users, setUser] = useState([])
    fetch(`${BASE_URL}users?limit=8`)
        .then(users => users.json())
        .then(response => setUser(response));
        console.log(users)
    return (
        <section>
            <div className="flex gap-20 flex-wrap justify-center py-24 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                {
                    users.map(users => (
                        <div class="card p-5 flex items-center space-x-4 cursor-pointer">
                            <img class="w-10 h-10 rounded-full" src={users.avatar} alt="" />
                            <div class="font-medium dark:text-white">
                                <div>{users.name}</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">{users.email}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
