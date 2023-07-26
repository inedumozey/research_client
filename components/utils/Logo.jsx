import React from 'react'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/'>
            <div className='text-color-pri1 font-bold'>Drophyte</div>
        </Link>
    )
}
