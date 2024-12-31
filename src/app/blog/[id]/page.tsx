import React from 'react'
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import CommentInput from '@/components/CommentInput';


interface BlogPropsInterface {
  params: {
    id: number
  },
}


export default async function page({ params}: BlogPropsInterface) {

  const builder = imageUrlBuilder(client);


  const { id } = params;

  const blog = await client.fetch(
    `*[_type == "blog" && _id == $id][0]`, // Fetch a single blog with the matching _id
    { id } // Pass the `id` as a parameter
  );

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  console.log(params.id);


  return (
    <div className='flex flex-col items-center mx-8 gap-y-7'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-semibold text-center mt-14'>
        {blog.name}
      </h2>

      <Image src={builder.image(blog.mainImage.asset).url()} height={1000} width={1000} alt={blog.name}
        className='w-52 sm:w-80 lg:w-[30rem]'
      />
      <p className='text-sm sm:text-base lg:text-lg'>
        {blog.content}
      </p>


      <CommentInput />
      {/* <CommentSection /> */}
    </div>
  )
}
