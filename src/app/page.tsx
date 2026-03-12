import Popup from '@/components/Popup';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Client Demo</h1>
        <p className="text-gray-600 mb-8">Click the button to open the popup</p>
        <div className="flex gap-4 justify-center flex-col">
          <div className='flex gap-4 items-center'>
            <p className='font-bold text-2xl text-gray-900'>Mr.A</p>
            <Popup />
          </div>
          <div className='flex gap-4 items-center'>
            <p className='font-bold text-2xl text-gray-900'>Mr.B</p>
            <Popup />
          </div>
        </div>
      </div>
    </div>
  );
}
