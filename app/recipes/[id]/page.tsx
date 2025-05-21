type Props = { params: { id: string } };

export default async function RecipePage({ params }: Props) {
  return <div>Recipe ID: {params.id}</div>;
}
