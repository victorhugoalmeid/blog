import React from "react"
import PostItem from "../PostItem"

const Hit = () => (
    <PostItem
    slug={hit.field.slug}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
    />
)

export default Hit