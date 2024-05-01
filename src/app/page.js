import BlogList from '@/components/BlogList';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  const blogs = await prisma.post.findMany();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Blog Platform</h1>
      <BlogList posts={blogs} />
    </main>
  )
}
