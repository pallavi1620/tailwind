import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import substituteTailwindAtRules from 'tailwindcss/lib/lib/substituteTailwindAtRules';
import { blogPost, getStaticProps } from '../lib/data';

export default function Home() {

const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = getStaticProps();
    fetchData.then(function(data){
       console.log(data)
       setData(data)
     })
  },[])

 return (
    <div>
      <div className="sm:flex flex-wrap rounded-xl ">
        {
          data.map((user) => (
            <BlogListItem key = { user.id} {...user} /> 
          ))
        }
      </div>
    </div>
  );
}

function BlogListItem({ id, name,username,email,adress,phone,website,company, content, subtitle, image}) {
  return (
    // <div className='columns-3xs border border-black-100 shadow-xl rounded-lg mx-8 mb-8 py-8 lg:py-0 lg:w-1/3 lg:h-40 h-auto '>
    //   <div className="">
    //     <img  className='lg:mx-0 lg:rounded-l-lg lg:h-40 lg:w-32 w-24 h-24 md:w-48 md:h-auto md:rounded-none mx-auto rounded-full' src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" ></img>
    //       {/* <div className='lg:h-10'><Link href= {`/blog`}><a>{image}</a></Link>
    //       </div> */}
    //   </div>
    //   <div className='w-full'>
    //       <div className='text-lg lg:ml-48 mr-5  pl-5 lg:-mt-4 text-center mt-3 lg:text-left'>{email}
    //       </div>
    //       <div className=' font-medium text-sky-500 dark:text-sky-400 lg:ml-48 lg:-mt-16 pl-5 text-center lg:text-left'><a>{name}</a>
    //       </div>
    //       <div className='text-slate-700 dark:text-slate-500 lg:ml-48 pl-5 text-center lg:text-left'>{username}{username}
    //       </div>
    //   </div>
    // </div>
//   );
// }

 <div class="max-w-md lg:w-1/4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mx-8 mb-8 py-8 lg:py-0 ">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="lg:h-full l:w-3/12  lg:mx-0 lg:rounded-l-lg lg:h-40 lg:w-32 w-24 h-24 md:w-48 md:h-auto md:rounded-none mx-auto rounded-full" src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="Man looking at item at a store"></img>
    </div>
    <div>
      <div class="pl-8 pt-8 text-lg  text-center font-medium lg:text-left">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </div>
      <div class="pl-8 mt-2 pt-10 text-medium font-normal text-sky-500 text-center lg:text-left"><a href="#" >{name}</a></div>
      <p class="mt-1 pl-8 text-center lg:text-left">{username}</p>
    </div>
  </div>
</div>
 );
} 
