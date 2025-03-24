export default function ExperimentalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This layout only applies in development mode
  // In production, this path would be disabled by the route handler
  return (
    <div className="experimental-layout">
      {process.env.NODE_ENV === 'development' ? (
        children
      ) : (
        <div className="container mx-auto p-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Experimental Features</h1>
          <p>Experimental designs are only available in development mode.</p>
        </div>
      )}
    </div>
  )
} 