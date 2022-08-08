import { useRouter } from "next/router";

export default function ProjectsPage({ project }: any) {
  const router = useRouter();
  // const { id } = router.query;

  return (
    <h1>Projects </h1>
  );
}

export async function getStaticPaths({ params }: any) {
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await req.json();
  const paths = data.map((project: any) => {
    return {
      params: { id: project?.id?.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({ params }: any) {
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await req.json();

  return {
    props: {
      project: data
    }
  }
}