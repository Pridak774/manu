// @ts-nocheck
// Minimal version, no generateStaticParams

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Job Page</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
