// Cloudflare Worker entry point
export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    return new Response('Hello from Cloudflare Worker!', {
      headers: { 'Content-Type': 'text/plain' },
    });
  },
};