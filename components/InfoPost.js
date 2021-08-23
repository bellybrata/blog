import PostMetaTitle from "@components/PostMetaTitle"
import PostAuthor from "@components/PostAuthor"

export default function InfoPost({
	id,
	category,
	date,
	title,
	slug,
	headLine,
	authorAvatar,
	authorName,
	authorJob
}) {
	return (
		<>
			<PostMetaTitle
				category={category}
				date={date}
				title={title}
				slug={slug}
			/>
			<p className="text-white/60 mt-5 w-10/12">{headLine}</p>
			<PostAuthor
				authorAvatar={authorAvatar}
				authorName={authorName}
				authorJob={authorJob}
			/>
		</>
	)
}
