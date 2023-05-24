'use client'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../constant/constant';

export default async function Users() {
    const [users, setUser] = useState([])
    useEffect(() => {
        fetch(`${BASE_URL}users?limit=8`)
        .then(users => users.json())
        .then(response => setUser(response));
    }, [])
    
    return (
        <section>
            <p className='text-5xl font-semibold mt-20 text-center'>Our <span className='text-green-500'>First Users</span></p>
            <div className="flex mt-10 justify-center items-center">
                <div className='flex items-center justify-center flex-wrap'>
                    {
                        users.map(users => (
                            <div key={users.id} class="card p-5 m-10 flex items-center space-x-4 cursor-pointer">
                                <img class="w-10 h-10 rounded-full" src={users.avatar} alt="" />
                                <div class="font-medium dark:text-white">
                                    <div>{users.name}</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">{users.email}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
