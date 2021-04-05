import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps(context) {
  const {
    params, // contains route parameters (eg. [id].js => { id: idInside[] })
  } = context;

  console.log(params);
  // pass post id to access local .md file and parse them into data
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

// Export async function "getStaticPaths" from a page that uses dynamic routes, (eg. [id].js),
// to have Next.js pre-render all paths inside the returned object
export async function getStaticPaths() {
  const paths = getAllPostIds();

  // getStaticPaths must return an object with following shape:
  // {
  //   paths: [
  //     {
  //       params: {
  //         id: string
  //       }
  //     }
  //   ],
  //   fallback: boolean
  // }
  return {
    paths,
    fallback: false, // any path not returned from `getStaticPaths` will show 404 page
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="heading-xl">{postData.title}</h1>
        <div className="light-text">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
}
