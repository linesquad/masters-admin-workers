export const Route = createLazyFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/master/reviews/stats"!</div>
}
