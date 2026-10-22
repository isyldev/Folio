import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/reader/$bookId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/reader/$bookId"!</div>
}
