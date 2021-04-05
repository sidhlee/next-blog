import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import { GetStaticProps } from 'next';

const StyledHome = styled.section`
  min-height: initial;

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`;

type HomeProps = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <StyledHome className="container">
        <header className="heading-md">
          <p>
            Hello, I am a web developer and a pianist from Seoul, South Korea.
            You can contact me on{' '}
            <a href="https://twitter.com/HayounSid" target="_blank">
              Twitter
            </a>
          </p>
        </header>
        <section>
          <h2 className="heading-lg">Blog</h2>
          <ul className="list">
            {allPostsData.map(({ id, date, title }) => (
              <li className="list-item" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>

                <br />
                <small className="light-text">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </StyledHome>
    </Layout>
  );
};

// This only runs on the server-side, and not going to be included in the bundle!
// so any functions importing/using node module can be used in here.
// In production, it only runs at build time. -> no access to query params/HTTP headers!
// In development, it runs on every request
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
