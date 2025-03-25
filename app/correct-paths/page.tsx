import Image from 'next/image'

export default function CorrectPathsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Image Path Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Direct SVG from public root */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Direct SVG Image</h2>
          <div className="aspect-video w-full max-w-sm mx-auto bg-gray-100 mb-4 overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Placeholder SVG"
              width={800}
              height={600}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="text-sm space-y-1">
            <p><strong>Path:</strong> /placeholder.svg</p>
            <p><strong>Note:</strong> Directly references a file in public directory</p>
            <p><strong>HTML Equivalent:</strong> &lt;img src="/placeholder.svg" /&gt;</p>
          </div>
        </div>
        
        {/* Direct JPG from public root */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Direct JPG Image</h2>
          <div className="aspect-square w-full max-w-sm mx-auto bg-gray-100 mb-4 overflow-hidden rounded-lg">
            <Image
              src="/placeholder-user.jpg"
              alt="Placeholder User"
              width={400}
              height={400}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="text-sm space-y-1">
            <p><strong>Path:</strong> /placeholder-user.jpg</p>
            <p><strong>Note:</strong> Directly references a file in public directory</p>
            <p><strong>HTML Equivalent:</strong> &lt;img src="/placeholder-user.jpg" /&gt;</p>
          </div>
        </div>
        
        {/* Image from subdirectory */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Image in Subdirectory</h2>
          <div className="aspect-square w-full max-w-sm mx-auto bg-gray-100 mb-4 overflow-hidden rounded-lg">
            <Image
              src="/images/profile.jpg"
              alt="Profile Image"
              width={400}
              height={400}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="text-sm space-y-1">
            <p><strong>Path:</strong> /images/profile.jpg</p>
            <p><strong>Note:</strong> References a file in the images subdirectory of public</p>
            <p><strong>File System Path:</strong> /public/images/profile.jpg</p>
            <p><strong>HTML Equivalent:</strong> &lt;img src="/images/profile.jpg" /&gt;</p>
          </div>
        </div>
        
        {/* Regular image tag for comparison */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Regular IMG Tag (Not Next.js Image)</h2>
          <div className="aspect-square w-full max-w-sm mx-auto bg-gray-100 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
            <img 
              src="/placeholder-user.jpg"
              alt="Regular IMG tag"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="text-sm space-y-1">
            <p><strong>Path:</strong> /placeholder-user.jpg</p>
            <p><strong>Note:</strong> Using regular HTML img tag for comparison</p>
            <p><strong>HTML:</strong> &lt;img src="/placeholder-user.jpg" /&gt;</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 p-4 border rounded-lg bg-yellow-50">
        <h2 className="text-xl font-semibold mb-4">How Next.js Image Paths Work</h2>
        <div className="space-y-4 text-sm">
          <p>
            <strong>Important:</strong> In Next.js, image paths in the <code>src</code> attribute of the Image component 
            are always relative to the <code>/public</code> directory, but you should <strong>never</strong> include 
            "/public" in the path.
          </p>
          
          <p>
            For example:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Correct:</strong> <code>src="/images/profile.jpg"</code> → references file at <code>/public/images/profile.jpg</code>
            </li>
            <li>
              <strong>Incorrect:</strong> <code>src="/public/images/profile.jpg"</code> → this would look for a file at <code>/public/public/images/profile.jpg</code>
            </li>
          </ul>
          
          <p>
            The <code>/public</code> directory is mapped to the root of your website automatically, so all files in there are accessible by their path without the "public" prefix.
          </p>
        </div>
      </div>
    </div>
  )
} 