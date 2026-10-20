import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LoginScreen,
})

function LoginScreen() {
  return <div>
    <h3 className="bg-blue-500">Please enter your password here</h3>
  </div>
}
