import InfoPost from '@components/InfoPost'
import Link from 'next/link'
import React from 'react'

export default function CardPost({ thumbnail, ...infoPost }) {
	return (
		<article>
			<Link href="/">
				<a>
					<img src={thumbnail} className="w-full rounded-xl mb-4" />
				</a>
			</Link>
			<InfoPost
				{...infoPost}
			/>
		</article>
	)
}
