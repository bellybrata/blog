import InfoPost from '@components/InfoPost'

export default function Featured() {
	return (
		<article>
			<div className="flex -mx-4 lg:items-center flex-start flex-wrap">
				<div className="px-4 lg:w-8/12 md:w-7/12 w-full" >
					<img src="https://placekitten.com/700/400" className="w-full rounded-xl mb-4 md:mb-0" />
				</div>
				<div className="lg:w-4/12 md:w-5/12 w-full px-4">
					<InfoPost
						category="UI Desain"
						date="July 2, 2021"
						title="Lorem Ipsum Dolor Sit Amet"
						slug="lorem-ipsum-dolor-sit-amet"
						headLine="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis neque luctus, ullamcorper massa a, semper augue. Ut sit amet nisi a elit dapibus sagittis. Sed consectetur facilisis nisi ut faucibus. In luctus velit ac arcu volutpat interdum."
						authorAvatar="https://placekitten.com/400/400"
						authorName="John Wick"
						authorJob="UI Design"
					/>
				</div>
			</div>
			<hr className="border-white/10 mt-10 md:hidden" />
		</article>
	)
}
