import React, { useState } from 'react'

export default function Categories() {
    const [categories, SetCategories] = useState([]);
    fetch('https://api.escuelajs.co/api/v1/categories?limit=10').then(Response => Response.json()).then(response => SetCategories(response));
    return (
        <main className='mt-10 flex flex-wrap gap-5 justify-center items-start'>
            {categories.map(Category => (
                <div class="max-w-sm max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src={Category.image} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Category.name}</h5>
                        </a>
                    </div>
                </div>
            ))}
        </main>
    )
}
