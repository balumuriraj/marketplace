import { useRouter } from "next/router";

export default function ProjectsPage({ project }: any) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <h1>Projects {id}</h1>
  );
}

export async function getStaticProps({ params }: any) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: {
      project: data
    }
  }
}