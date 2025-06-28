"use client"

import posts from "../../data/posts"
import { useParams } from "next/navigation"
import Link from "next/link"


export default function PostPage() {
  const params = useParams()
  const id = params.id

  const post = posts.find((p) => p.id === id)

  if (!post) return <p className="text-center">Loading...</p>

  return (

    <div className="min-h-screen flex  item-center justify-center px-2 py-10">
      <div className="bg-amber-50 shadow-md rounded-4xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-black text-center mb-6">
          List of Blogs
        </h1>
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h1>
          <p className="text-gray-700 ">{post.content}</p>
        </div>

        <h3 className="text-lg font-semibold text-emerald-950 mb-2">All posts</h3>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id} className="bg-grey-200 hover:bg-blue-300 rounded px-2 py-2 transition">
              <Link href={`/posts/${post.id}`} className="text-blue-800 font-medium">{post.title}</Link>
            </li>
          ))}
        </ul>



      </div>
    </div>
  )
}