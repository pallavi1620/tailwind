// import Head from 'next/head'
// import { blogPost } from '../../lib/data';

// export default function BlogPage({title,image,content,subtitle}) {
//   return (
//     <div>
//       <Head>
//       <title>{title}</title>
//       <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         <h1>
//         {title}
//         <div>{content}</div>
//         </h1>
//       </main>
//       </div>
//   );
// }

// export async function getStaticProps(context) {
//   console.log('hieee',context);
//   const{ params } = context;
//   return {
//     props: blogPost.find(item => item.slug === params.slug),
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: blogPost.map(item => ({
//       data: {
//         slug: item.slug,
//       }
//     })),
//     fallback: false,
//   };
// }