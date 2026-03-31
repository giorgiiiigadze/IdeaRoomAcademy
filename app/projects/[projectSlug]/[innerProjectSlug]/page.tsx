export default async function InnerProjectSlugPage({ params }: { params: { innerProjectSlug: string } }) {
    const { innerProjectSlug } = await params
    

    return (
        <div>
            Inner Project Slug

            {innerProjectSlug}
        </div>
    )
}