import Head from 'next/head'
import { useState } from 'react'

import Post from '../components/post'

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  )
  const postList = await response.json()
  return {
    props: {
      postList,
    },
  }
}



export default function IndexPage({ postList }) {
  const [txt,setTxt] = useState("")
  const handleChange = e => {setTxt(e.target.value)}
  return (
    <main>
      <Head>
        <title>Home page fuck fuckj</title>
      </Head>

      <h1>On9999</h1>
        <input type='text' onChange={(e) => handleChange(e)} value={txt} ></input>
      <section>
        {postList.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </section>
    </main>
  )
}
