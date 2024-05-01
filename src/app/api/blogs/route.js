import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getBlogs = async (req) => {
    const posts = await prisma.post.findMany();
    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const addBlog = async (req) => {
    const { title, content, author } = await req.json();
    const post = await prisma.post.create({
        data: { title, content, author },
    });
    return new Response(JSON.stringify(post), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const updateBlog = async (req) => {
    const { id, title, content, author } = await req.json();
    const updatedPost = await prisma.post.update({
        where: { id },
        data: { title, content, author },
    });
    return new Response(JSON.stringify(updatedPost), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const deleteBlog = async (req) => {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    await prisma.post.delete({ where: { id: parseInt(id) } });
    return new Response(null, { status: 204 });
}