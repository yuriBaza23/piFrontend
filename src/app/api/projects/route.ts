/* eslint-disable import/no-anonymous-default-export */
import db from '../../../lib/firedb';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const projectBoards = await db.collection('projectBoards').get();
    const pbData = projectBoards.docs.map(pb => pb.data());

    const pb = pbData.find(pb => pb.company === data.company);
    if (pb) {
      return new Response(JSON.stringify(pb))
    } else {
      const { id } = await db.collection('projectBoards').add({
        ...data,
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
      });
      await db.collection('projectBoards').doc(id).update({
        id,
      })
      return new Response(JSON.stringify({ id, boards: data.boards }), { status: 200 })
    }
  } catch (e) {
    return new Response('', { status: 400 })
  }
}

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const projectBoards = await db.collection('projectBoards').get();
    const pbData = projectBoards.docs.map(pb => pb.data());

    const pb = pbData.find(pb => pb.company === data.company);
    if (pb) {
      await db.collection('projectBoards').doc(pb.id).update({
        boards: data.boards,
        updated: new Date().toISOString(),
      })

      return new Response(JSON.stringify({ id: pb.id, boards: data.boards }), { status: 200 })
    } 
  } catch (e) {
    return new Response('', { status: 400 })
  }
}

export async function DELETE(req: Request) {
  try {
    const {searchParams} = new URL(req.url);
    const param = searchParams.get("id");
    const projectBoards = await db.collection('projectBoards').get();
    const pbData = projectBoards.docs.map(pb => pb.data());

    const pb = pbData.find(pb => pb.company === param);
    if (pb) {
      await db.collection('projectBoards').doc(pb.id).delete();

      return new Response('', { status: 200 })
    } 
  } catch (e) {
    return new Response('', { status: 400 })
  }
}

export async function GET(req: Request) {
  try {
    const {searchParams} = new URL(req.url);
    const param = searchParams.get("id");
    const projectBoards = await db.collection('projectBoards').get();
    const pbData = projectBoards.docs.map(pb => pb.data());

    const pb = pbData.find(pb => pb.company === param);
    if (pb) {
      return new Response(JSON.stringify(pb))
    }
  } catch (e) {
    return new Response('', { status: 400 })
  }
}