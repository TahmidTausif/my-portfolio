// app/projects/[id]/page.tsx
import ProjectDetails from '@/components/ProjectDetails'




export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      
      <ProjectDetails projectId={id} />
    </div>
  );
}
