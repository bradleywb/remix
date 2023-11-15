import { ActionFunctionArgs, json } from '@remix-run/node'

async function boop(data) {
  return json({ action: 'boop', data })
}

async function submit(data) {
  return json({ action: 'default', data })
}

export default async function action({ params, request }: ActionFucntionArgs) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const { method } = data || {}

  switch (method) {
    case 'boop':
      return boop(data)
    default:
      return submit(data)
  }
}
