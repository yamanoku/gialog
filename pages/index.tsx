import type { NextPage } from "next";
import Link from "next/link";
import { listIssues } from "../lib/issue";
import Time from "../components/Time";

type Props = {
  issues: Array<Issue>;
};

type Issue = any;

const Home: NextPage<Props> = ({ issues }) => {
  return (
    <>
      {issues.map((issue) => (
        <article key={issue.number}>
          <p>
            <Time dateTime={issue.created_at} />
          </p>
          <h2>
            <Link href={`/articles/${issue.number}`}>{issue.title}</Link>
          </h2>
        </article>
      ))}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      issues: listIssues(),
    },
  };
}
