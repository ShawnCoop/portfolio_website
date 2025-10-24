export default function Projects() {
    return (
      <section id="projects" className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Selected Projects</h2>
  
          <div className="grid gap-8 md:grid-cols-2">
            <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-2">3D Hand Gesture Control</h3>
              <p className="mb-4">A Blender add-on using Mediapipe and OpenCV to manipulate 3D objects via hand gestures (move, rotate, scale).</p>
              <div className="flex gap-3">
                <a className="text-sm px-3 py-1 border rounded" href="#">Demo</a>
                <a className="text-sm px-3 py-1 border rounded" href="#">GitHub</a>
              </div>
            </article>
  
            <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-2">ASL Alphabet Classifier</h3>
              <p className="mb-4">Real-time ASL letter recognition with TensorFlow and OpenCV, wrapped in a minimal Flask demo.</p>
              <div className="flex gap-3">
                <a className="text-sm px-3 py-1 border rounded" href="#">Demo</a>
                <a className="text-sm px-3 py-1 border rounded" href="#">GitHub</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    )
  }
  