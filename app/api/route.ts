export const dynamic = "force-dynamic"; // static by default, unless reading the request

export async function POST(request: Request) {
  const json = await request.json();
  console.debug("body", json);
  return new Response(`Hello from ${json}`);
}
