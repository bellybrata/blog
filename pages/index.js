import { useState } from 'react'
import Head from 'next/head'
import Featured from '@components/Featured'
import Container from '@components/Container'
import Layout from '@components/Layout'
import CardPost from '@components/CardPost'
import postData from '../utils/post.json'

export default function Home() {
  const [post, setPost] = useState(postData)
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Blog</title>
      </Head>
      <Container>
        <Featured />
        <div className="flex flex-wrap -mx-4 mt-6">
          {post.map(post => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6" >
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout >
  )
}
