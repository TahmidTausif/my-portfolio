// app/projects/[id]/page.tsx
import ProjectDetails from '@/components/ProjectDetails'




export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;
  return (
    <div>
      
      <ProjectDetails projectId={id} />
    </div>
  );
}
