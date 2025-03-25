import Image from 'next/image'

export default function StaticImagesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Static Images Test</h1>
      <p className="mb-8 text-lg">
        These images are stored in the <code>/public/static</code> directory and accessed directly with <code>/static/filename.webp</code>
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Neil Profile Image */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Neil Profile</h2>
          <div className="aspect-square w-full max-w-sm mx-auto bg-gray-100 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
            <Image
              src="/static/neil-profile.webp"
              alt="Neil Profile"
              width={400}
              height={400}
              className="max-w-full max-h-full object-contain"
              priority
            />
          </div>
          <div className="text-sm space-y-1">
            <p><strong>Path:</strong> /static/neil-profile.webp</p>
            <p><strong>File System Path:</strong> /public/static/neil-profile.webp</p>
            <p><strong>Format:</strong> WebP Image</p>
          </div>
        </div>
        
        {/* Pelvic Model Image */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Pelvic Model</h2>
          <div className="aspect-video w-full max-w-sm mx-auto bg-gray-100 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
            <Image
              src="/static/pelvic-model.webp"
              alt="Pelvic Model"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
              priority
            />
          </div>
          <div className="text-sm space-y-1">
            <p><strong>Path:</strong> /static/pelvic-model.webp</p>
            <p><strong>File System Path:</strong> /public/static/pelvic-model.webp</p>
            <p><strong>Format:</strong> WebP Image</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Using These Images in Your Components</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <pre className="overflow-x-auto text-sm">
{`// Example usage in a component
import Image from 'next/image'

export default function About() {
  return (
    <div>
      <Image
        src="/static/neil-profile.webp"
        alt="Neil Humphrey"
        width={400}
        height={400}
        className="rounded-full"
      />
    </div>
  )
}`}
          </pre>
        </div>
      </div>
      
      <div className="mt-10 p-4 border border-green-200 rounded-lg bg-green-50">
        <h2 className="text-xl font-semibold mb-4 text-green-800">Important Path Rules</h2>
        <div className="space-y-4 text-sm text-green-800">
          <p>
            <strong>Rule #1:</strong> Images in Next.js should always have paths relative to the <code>/public</code> directory.
          </p>
          <p>
            <strong>Rule #2:</strong> Never include <code>/public</code> in your image paths - the public directory is automatically mapped to the root URL.
          </p>
          <p>
            <strong>Rule #3:</strong> When using external images in a development environment, make sure to add the domain to your <code>next.config.js</code> file. For production, it's better to host images locally.
          </p>
          <p>
            <strong>File System Structure:</strong> <code>/public/static/image.webp</code> → <strong>Image src:</strong> <code>"/static/image.webp"</code>
          </p>
        </div>
      </div>
    </div>
  )
} 