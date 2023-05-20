'use client'
import Image from 'next/image'
import cover_bg from './images/first-bg.png'
import Link from 'next/link';
import Product from './products/page';
import { Suspense } from 'react';
import Loading from './loading';
import Categories from './categories/categories';
export default function Home() {

  return (
    
      <main className="home flex-col items-center justify-between p-24">
        <section className="page-1 flex items-center justify-between w-100">
          <div>
            <h1 className="header-homepage text-5xl font-bold uppercase"><span className='text-green-400'>Psa</span> of production website</h1>
            <p style={{ width: "75%" }} className='mt-5 text-gray-500'>Welcome to our website, your ultimate destination for all things fashion! Our homepage is designed to showcase our extensive range of clothing products that cater to all your fashion needs.</p>
            <div className='product-list max-w mt-5 flex gap-2 justify-between'>

              <a href="#" class="card block max-w-sm p-6">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">Find us</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
              </a>

              <a href="#" class="card block max-w-sm p-6">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">Active time</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Monday – Saturday 9am – 7pm Sunday 10am – 6pm
                </p>
              </a>

              <a href="tel:011348219" class="card block max-w-sm p-6">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">Call us</h5>
                <div class="font-normal text-gray-700 dark:text-gray-400">
                  011 34 82 19 and 123 4435 5645
                </div>
              </a>
            </div>
          </div>
          <Image src={cover_bg} alt='cover-bg' style={{ width: "50%" }} />
        </section>

        <section className="page-2 flex-col items-center justify-between w-100">
          <p className='text-5xl font-semibold text-center'>Our <span className='text-green-500'>products</span></p>
          <Suspense fallback={<Loading />}><Product /></Suspense>
        </section>

        <section className="page-3 flex-col items-center justify-between w-100">
          <p className='text-5xl font-semibold mt-20 text-center'>Categories <span className='text-green-500'>Collection</span></p>
          <Categories />
        </section>
      </main >
  )
}
