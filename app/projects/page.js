export default function Projects() {
    const projects = [
      {
        title: "AI-Powered Chatbot",
        description: "Built a multilingual chatbot using NLP models like mBERT and TensorFlow.",
        tech: ["Python", "TensorFlow", "NLP"],
        github: "https://github.com/vinayprathi/ai-chatbot",
        demo: "https://ai-chatbot-demo.vercel.app",
      },
      {
        title: "Stock Price Predictor",
        description: "Created a stock market prediction model using LSTMs and time-series analysis.",
        tech: ["Python", "LSTMs", "Time Series"],
        github: "https://github.com/vinayprathi/stock-predictor",
        demo: "https://stock-predictor.vercel.app",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-10 text-white">
        <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">Projects</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="border p-4 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl text-blue-300">{project.title}</h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-blue-500 text-white px-2 py-1 rounded text-sm mr-2">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a href={project.github} className="text-blue-500 hover:text-blue-300 mr-4">GitHub</a>
                <a href={project.demo} className="text-blue-500 hover:text-blue-300">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  