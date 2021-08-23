import Head from 'next/head'
import { useState } from 'react'
import SectionHeader from '@components/SectionHeader'
import CardPost from '@components/CardPost'
import Container from '@components/Container'
import Layout from '@components/Layout'
import postData from '../../utils/post.json'

export default function Posts() {
	const [post, setPost] = useState(postData)
	return (
		<Layout>
			<Head>
				<title>Posts &mdash; Blog</title>
			</Head>
			<SectionHeader>UI Design</SectionHeader>
			<Container>
				{!post.length ? (
					<div className="text-center">
						<h2>No Result</h2>
						<p>Ga ada hasil</p>
					</div>
				) : (
					<div className="flex flex-wrap -mx-4 mt-6">
						{post.map(post => (
							<div key={post.id} className="md:w-4/12 w-full px-4 py-6" >
								<CardPost {...post} />
							</div>
						))}
					</div>
				)}
			</Container>
		</Layout>
	)
}
