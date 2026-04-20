

type GuestModalProps = {
  onClose: () => void;
};

export default function GuestModal({ onClose }: GuestModalProps) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 max-w-md w-full relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
          onClick={onClose }
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          🔒 Track Your Own Portfolio
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          Unlock personalized insights and save your holdings by logging in.
        </p>
        <div className="flex flex-col gap-3">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
            onClick={() => (window.location.href = "/login")}
          >
            Log In
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign Up
          </button>
       
        </div>
      </div>
    </div>
  );
}
