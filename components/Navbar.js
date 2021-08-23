import Link from 'next/link'
import { useState } from 'react';
import Container from '@components/Container';

export default function Navbar() {
	const [dropDown, setDropDown] = useState(false);
	const [offCanvas, setOffCanvas] = useState(false);
	const [search, setSearch] = useState(false);
	const dropDownList = [
		{ text: 'Internet', href: 'posts' },
		{ text: 'Books', href: 'posts' },
		{ text: 'Open Source', href: 'posts' },
	];

	return (
		<nav className="py-10">
			<Container>
				<div className="flex items-center">
					<div className="w-3/12 lg:hidden">
						<button onClick={() => { setOffCanvas(!offCanvas) }}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
							</svg>
						</button>
					</div>
					<div className="lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start">
						<Link href="/">
							<a>
								<div className="flex items-center">
									<div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-2 shadow-2xl">E</div>
									Epicentreus
								</div>
							</a>
						</Link>

					</div>
					<div className="w-3/12 lg:hidden text-right">
						<button onClick={() => setSearch(!search)}>
							<svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
						</button>
					</div>
					<div className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${offCanvas ? 'left-0' : '-left-full'}`}>
						<button
							onClick={() => setOffCanvas(false)}
							className="absolute top-10 right-10 lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
						</button>
						<ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
							<li><Link href="/posts"><a className="hover:text-gray-400">UI Design</a></Link></li>
							<li><Link href="/posts"><a className="hover:text-gray-400">Front-end</a></Link></li>
							<li><Link href="/posts"><a className="hover:text-gray-400">Back-end</a></Link></li>
							<li className="relative">
								<a
									className="hover:text-gray-400 cursor-pointer flex items-center"
									onClick={() => setDropDown(!dropDown)}
								>
									Lainnya
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2" viewBox="0 0 16 16">
										<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
									</svg>
								</a>
								{dropDown && (
									<ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
										{dropDownList.map(({ text, href }) => (
											<li key={text} className="border-b border-b-white/5 last:border-0">
												<Link href={href} >
													<a className="flex py-3 px-6 hover:bg-gray-700/60 ">
														{text}
													</a>
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						</ul>
					</div>
					<div className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${search ? 'top-10' : '-top-40'}`}>
						<button
							className="absolute top-3 right-14 lg:hidden"
							onClick={() => setSearch(false)}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
						</button>
						<input className="bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12 outline-none" placeholder="Search..." />
					</div>
				</div>
			</Container>
		</nav >
	)
}
