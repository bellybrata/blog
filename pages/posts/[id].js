import { useRouter } from 'next/router'
import Head from 'next/head'
import Container from "@components/Container"
import Layout from "@components/Layout"
import PostMetaTitle from '@components/PostMetaTitle';
import PostAuthor from '@components/PostAuthor';

export default function post() {
	const router = useRouter();
	const { slug } = router.query
	return (
		<Layout>
			<Head>
				<title>Lorem ipsum dolor sit amet &mdash; Blog</title>
			</Head>

			<Container>
				<div className="md:w-6/12 w-full mx-auto flex flex-col items-center">
					<PostMetaTitle
						category="UI Design"
						date="12 July, 2021"
						title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis neque luctus, ullamcorper massa a, semper augue. "
						slug="lorem-ipsum-dolor-sit-amet"
						center
					/>
					<PostAuthor
						authorName="Belly Brata"
						authorJob="IT Content"
						authorAvatar="https://placekitten.com/400/400"
					/>
				</div>
				<div className="md:w-10/12 w-full mx-auto my-10">
					<img src="https://placekitten.com/800/500" className="w-full rounded-lg" />
				</div>
				<div className="md:w-8/12 w-full mx-auto leading-relaxed">
					<p className="text-xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis neque luctus, ullamcorper massa a, semper augue.
					</p>
					<p className="mb-4">Sed consectetur facilisis nisi ut faucibus. In luctus velit ac arcu volutpat interdum. Fusce malesuada sollicitudin enim sit amet tristique. Phasellus ac erat at nibh ultrices dictum ut eget mauris. Sed consequat dictum velit nec dapibus. Phasellus at lorem a leo vehicula venenatis non id elit. </p>
					<p >Sed et velit id felis auctor iaculis. Nunc elementum justo ultricies augue facilisis, ac cursus ante vestibulum. In hac habitasse platea dictumst. Etiam in orci nec tortor tempus sodales. Pellentesque dapibus porttitor nisl, vitae feugiat felis lacinia non. Vivamus aliquam lacinia odio iaculis consectetur. Fusce ultricies nisi augue, a sodales arcu varius vitae.</p>
				</div>
			</Container>
		</Layout>
	)
}
