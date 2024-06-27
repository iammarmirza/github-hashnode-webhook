export const dynamic = "force-dynamic"; // static by default, unless reading the request

export async function POST(request: Request) {
  const json = await request.json();
  const header = request.headers.get('x-hashnode-signature')
  console.debug("body", json);
  return new Response(`Hello from ${json}`);
}

export const runtime = 'nodejs';