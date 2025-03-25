import Image from 'next/image'

export default function TestImagePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image Optimization Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Profile Image</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Profile Image Test"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
              quality={90}
            />
          </div>
          <p className="text-sm text-gray-500">
            Path: /images/profile.jpg<br />
            Size: 400x400<br />
            Quality: 90<br />
            Format: Auto (WebP/AVIF if supported)
          </p>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Model Image</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/model.jpg"
              alt="Model Image Test"
              width={800}
              height={533}
              className="w-full h-auto"
              priority
              quality={90}
            />
          </div>
          <p className="text-sm text-gray-500">
            Path: /images/model.jpg<br />
            Size: 800x533<br />
            Quality: 90<br />
            Format: Auto (WebP/AVIF if supported)
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Image Format Test</h2>
        <p className="text-sm text-gray-500 mb-4">
          Next.js will automatically serve images in WebP or AVIF format if the browser supports it,
          regardless of the original image format. Check the network tab in your browser's dev tools
          to see what format is being served.
        </p>
      </div>
    </div>
  )
} 