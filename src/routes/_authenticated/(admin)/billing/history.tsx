export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/(admin)/billing/history"!</div>
}
