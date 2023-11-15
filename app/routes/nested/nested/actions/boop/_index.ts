import { ActionFunctionArgs, json } from '@remix-run/node'

export async function action({ params, request }: ActionFunctionArgs) {
  const payload = await request.formData()
  const data = Object.fromEntries(payload)

  return json({ action: 'boop', data })
}
