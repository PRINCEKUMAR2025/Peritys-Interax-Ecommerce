// e-commerce-react/src/app/components/Categories.js
import React from 'react';
import Link from 'next/link';

const Categories = () => {
    return (
        <div className='flex justify-center items-center space-x-8 pb-2 bg-red-700 text-white z-0'>
            <Link href={'/category/mens-clothing'}>
                <button className='capitalize opacity-50 hover:opacity-100'>
                    men's clothing
                </button>
            </Link>

            <Link href={'/category/jewelery'}>
                <button className='capitalize opacity-50 hover:opacity-100'>
                    jewelery
                </button>
            </Link>

            <Link href={'/category/electronics'}>
                <button className='capitalize opacity-50 hover:opacity-100'>
                    electronics
                </button>
            </Link>

            <Link href={'/category/womens-clothing'}>
                <button className='capitalize opacity-50 hover:opacity-100'>
                    women's clothing
                </button>
            </Link>
        </div>
    );
}

export default Categories;