import Link from 'next/link'

export default function PostMetaTitle({ category, date, title, slug, center }) {
	return (
		<>
			<div className="flex items-center text-white/60 space-x-4">
				<div className="uppsercase">{category}</div>
				<span>&#8226;</span>
				<div>{date}</div>
			</div>
			<Link href={`/posts/${slug}`}>
				<a>
					<h2 className={`text-2xl mt-4 ${center ? 'text-center' : ''}`}>{title}</h2>
				</a>
			</Link>
		</>

	)
}
