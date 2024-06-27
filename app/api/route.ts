import { validateSignature } from "@/utils/signing";

export const dynamic = "force-dynamic";

const GITHUB_PERSONAL_ACCESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN!
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY!
const HASHNODE_SECRET_KEY = process.env.HASHNODE_SECRET_KEY!

export async function POST(request: Request) {
  const json = await request.json();
  console.debug("body", json);

  const validationResult = validateSignature({
    incomingSignatureHeader: request.headers.get('x-hashnode-signature'),
    payload: json,
    secret: HASHNODE_SECRET_KEY,
    validForSeconds: 0
  })

  if(!validationResult.isValid) {
    console.error('Invalid signature');
    return new Response('Invalid signature', { status: 403 })
  }

  const response = await fetch(`https://api.github.com/repos/iammarmirza/${GITHUB_REPOSITORY}/dispatches`, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        Authorization: `token ${GITHUB_PERSONAL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
        event_type: 'trigger',
        client_payload: {
            ...json.data
        }
    })
  })

  if(!response.ok) {
    console.log('Failed to trigger Github action; status code:', response.status);
    return new Response(response.statusText, { status: response.status })
  }

  return new Response('OK');
}



export const runtime = 'nodejs';