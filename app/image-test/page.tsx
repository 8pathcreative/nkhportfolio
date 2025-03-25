import Image from 'next/image'

export default function ImageTestPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Image Loading Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Test the profile.jpg image */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Profile Image (JPG)</h2>
          <div className="aspect-square w-full max-w-sm mx-auto bg-gray-100 mb-4 overflow-hidden rounded-lg">
            <Image
              src="/images/profile.jpg"
              alt="Profile image"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              unoptimized={false}
              priority
            />
          </div>
          <div className="text-sm space-y-1">
            <p><strong>Path:</strong> /images/profile.jpg</p>
            <p><strong>Size:</strong> 2.6 KB</p>
            <p><strong>Dimensions:</strong> 400×400</p>
            <p><strong>Format:</strong> JPG (should convert to WebP/AVIF)</p>
          </div>
        </div>
        
        {/* Test the model.jpg image */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Model Image (JPG)</h2>
          <div className="aspect-video w-full max-w-sm mx-auto bg-gray-100 mb-4 overflow-hidden rounded-lg">
            <Image
              src="/images/model.jpg"
              alt="Model image"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              unoptimized={false}
              priority
            />
          </div>
          <div className="text-sm space-y-1">
            <p><strong>Path:</strong> /images/model.jpg</p>
            <p><strong>Size:</strong> 1.6 KB</p>
            <p><strong>Dimensions:</strong> 800×600</p>
            <p><strong>Format:</strong> JPG (should convert to WebP/AVIF)</p>
          </div>
        </div>
        
        {/* Test the placeholder.svg directly */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Placeholder SVG</h2>
          <div className="aspect-video w-full max-w-sm mx-auto bg-gray-100 mb-4 overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Placeholder SVG"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              unoptimized={false}
              priority
            />
          </div>
          <div className="text-sm space-y-1">
            <p><strong>Path:</strong> /placeholder.svg</p>
            <p><strong>Size:</strong> 3.2 KB</p>
            <p><strong>Dimensions:</strong> SVG (scalable)</p>
            <p><strong>Format:</strong> SVG (may not convert)</p>
          </div>
        </div>
        
        {/* Test the placeholder-user.jpg directly */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Placeholder User JPG</h2>
          <div className="aspect-square w-full max-w-sm mx-auto bg-gray-100 mb-4 overflow-hidden rounded-lg">
            <Image
              src="/placeholder-user.jpg"
              alt="Placeholder User"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              unoptimized={false}
              priority
            />
          </div>
          <div className="text-sm space-y-1">
            <p><strong>Path:</strong> /placeholder-user.jpg</p>
            <p><strong>Size:</strong> 2.6 KB</p>
            <p><strong>Dimensions:</strong> 400×400</p>
            <p><strong>Format:</strong> JPG (should convert to WebP/AVIF)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Diagnostic Information</h2>
        <p className="mb-2">
          To verify the image format being served:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Open browser developer tools (F12 or right-click {'>'} Inspect)</li>
          <li>Go to the Network tab</li>
          <li>Filter by "Image" or "Img"</li>
          <li>Reload this page</li>
          <li>Check the "Content-Type" header for each image request</li>
        </ol>
        <p className="mt-4 text-sm text-gray-600">
          Next.js should serve WebP or AVIF images if your browser supports them. The original images are quite small (placeholder images), so they might not show up well. The main goal here is to verify the image optimization pipeline.
        </p>
      </div>
    </div>
  )
} 