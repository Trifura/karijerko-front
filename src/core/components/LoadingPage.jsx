export default function LoadingPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative w-64 h-1 bg-gray-200 rounded">
                <div className="absolute top-0 left-0 h-full bg-green-500 rounded animate-loading-bar"></div>
            </div>
        </div>
    );
}
