'use client'

import React, { useEffect, useState } from 'react'
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import BlogCard from './BlogCard';
import Link from 'next/link';


export default function ReadBlogsSec() {

    const builder = imageUrlBuilder(client);

    const [data, setData] = useState([])

    useEffect(() => {


        const fetchingData = async () => {
            try {
                let res = await client.fetch(`*[_type == 'blog']`)
                setData(res)
                // const res = await url.json();
                console.log(res);
            } catch (error) {
                console.log(error);

            }
        }

        fetchingData()
    }, [])

    return (
        <div>
            <div className='xl:grid xl:grid-cols-2 gap-x-2 gap-y-4 space-y-4 xl:space-y-0 2xl:justify-center xl:py-10'>
                {
                    data.map((obj: any) => (
                        <>
                           
                            <Link href={`/blog/${obj._id}`} 
                            key={obj._id}
                            className='mt-5 xl:my-0 xl:mx-5'
                            >
                                <BlogCard
                                    title={obj.name}
                                    previewText={obj.previewText}
                                    imageSrc={builder.image(obj.mainImage.asset).url()}
                                />
                            </Link>
                        </>
                    ))
                }
            </div>
        </div >
    )
}
