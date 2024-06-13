import Image from 'next/image';
import yeab from '@/../public/yeabsira.jpg'
export default function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 -mt-4">
      <div className="rounded-lg p-8 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center justify-center">
            <Image 
              src={yeab}
              alt="Profile" 
              width={150} 
              height={150} 
              className="rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-bold mb-2 text-center">Yeabsira Alemu Assefa</h1>
            <p className="text-center text-gray-600">Software Engineer</p>
          </div>
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-4">Downloads</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <span className="font-medium">Download CV</span>
                <a
                  href="/path/to/your/cv.pdf"
                  download
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Download
                </a>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <span className="font-medium">Download AWS Certification</span>
                <a
                  href="/path/to/your/certification1.pdf"
                  download
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Download
                </a>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <span className="font-medium">Download Other Certification</span>
                <a
                  href="/path/to/your/certification2.pdf"
                  download
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
