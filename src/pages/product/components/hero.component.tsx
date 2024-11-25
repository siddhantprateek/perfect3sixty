
import { Hand } from 'lucide-react';

const Hero = () => {
  return (
    <div className="text-center mb-12">
      <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <Hand className="text-white" size={32} />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold">
          <span className="text-gray-900">Hi, I'm </span>
          <span className="bg-gradient-to-r from-purple-500 to-rose-400 bg-clip-text text-transparent">Yara</span>
        </h1>
        <h1 className="text-3xl font-semibold">
          Can I help you with anything?
        </h1>
      </div>
      <p className="text-gray-600 max-w-md mx-auto mt-4">
        Ready to assist you with anything you need, from answering questions to providing recommendations. Let's get started!
      </p>
    </div>
  )
}

export default Hero