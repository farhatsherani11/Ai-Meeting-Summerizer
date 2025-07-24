import React from "react";

const App = () => {
  return (
<div id="webcrumbs"> 
        	<div className="min-h-screen bg-gray-900 text-white">
	  {/* Header with authentication */}
	  <header className="bg-gray-800 shadow-lg border-b border-gray-700">
	    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
	      <div className="flex items-center space-x-2">
	        <span className="material-symbols-outlined text-primary-500 text-3xl">smart_toy</span>
	        <h1 className="text-xl font-bold text-primary-400">AI Meeting Summarizer</h1>
	      </div>
	      
	      <div className="flex items-center space-x-4">
	        <div className="hidden md:flex items-center space-x-4">
	          <button className="text-gray-300 hover:text-primary-400 transition-colors">Dashboard</button>
	          <button className="text-gray-300 hover:text-primary-400 transition-colors">Pricing</button>
	          <button className="text-gray-300 hover:text-primary-400 transition-colors">Support</button>
	        </div>
	        
	        <div className="relative">
	          <details className="group">
	            <summary className="flex items-center space-x-2 cursor-pointer outline-none">
	              <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center border-2 border-primary-500 overflow-hidden">
	                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8fHx8MTc1MzI5MjczOXww&ixlib=rb-4.1.0&q=80&w=1080" alt="User profile" className="w-full h-full object-cover" keywords="user, profile, avatar, person" />
	              </div>
	              <span className="hidden md:inline-block font-medium">John Doe</span>
	              <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform">expand_more</span>
	            </summary>
	            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 shadow-lg rounded-md py-1 z-10">
	              <a href="#profile" className="block px-4 py-2 hover:bg-gray-700 transition-colors">Profile</a>
	              <a href="#settings" className="block px-4 py-2 hover:bg-gray-700 transition-colors">Settings</a>
	              <div className="border-t border-gray-700 my-1"></div>
	              <a href="#logout" className="block px-4 py-2 text-red-400 hover:bg-gray-700 transition-colors">Log out</a>
	            </div>
	          </details>
	        </div>
	      </div>
	    </div>
	  </header>
	
	  <main className="container mx-auto px-4 py-8">
	    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
	      {/* Sidebar */}
	      <div className="lg:col-span-1">
	        <div className="bg-gray-800 rounded-lg shadow-lg p-5 sticky top-5">
	          <div className="flex items-center justify-between mb-6">
	            <h2 className="text-lg font-semibold">Meeting History</h2>
	            <button className="w-8 h-8 rounded-full bg-primary-600 hover:bg-primary-500 flex items-center justify-center transition-colors">
	              <span className="material-symbols-outlined text-sm">add</span>
	            </button>
	          </div>
	          
	          <div className="space-y-4">
	            {[
	              { title: "Product Team Standup", date: "Today, 9:00 AM", unread: true },
	              { title: "Marketing Strategy", date: "Yesterday, 2:30 PM" },
	              { title: "Investor Presentation", date: "Jul 14, 11:00 AM" },
	              { title: "Design Review", date: "Jul 10, 4:00 PM" },
	              { title: "Q2 Planning", date: "Jul 5, 10:30 AM" }
	            ].map((meeting, index) => (
	              <div key={index} className={`p-3 rounded-md cursor-pointer transition-all hover:bg-gray-700 ${index === 0 ? 'bg-gray-700' : 'bg-gray-800'}`}>
	                <div className="flex justify-between">
	                  <h3 className="font-medium">{meeting.title}</h3>
	                  {meeting.unread && <span className="w-2 h-2 rounded-full bg-primary-400"></span>}
	                </div>
	                <p className="text-sm text-gray-400 mt-1">{meeting.date}</p>
	              </div>
	            ))}
	          </div>
	          
	          <button className="w-full mt-6 py-2 text-gray-400 hover:text-white text-sm flex items-center justify-center transition-colors">
	            <span className="material-symbols-outlined text-sm mr-1">history</span>
	            View all history
	          </button>
	        </div>
	      </div>
	      
	      {/* Main content */}
	      <div className="lg:col-span-3">
	        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
	          <div className="flex items-center justify-between mb-6">
	            <div>
	              <h2 className="text-xl font-semibold">Product Team Standup</h2>
	              <p className="text-gray-400 text-sm">Today, 9:00 AM • 45 minutes</p>
	            </div>
	            <div className="flex space-x-2">
	              <button className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors">
	                <span className="material-symbols-outlined text-sm">edit</span>
	              </button>
	              <button className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors">
	                <span className="material-symbols-outlined text-sm">share</span>
	              </button>
	              <button className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors">
	                <span className="material-symbols-outlined text-sm">more_vert</span>
	              </button>
	            </div>
	          </div>
	          
	          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
	            <div className="bg-gray-700 p-4 rounded-md">
	              <h3 className="text-sm font-medium text-gray-300 mb-2">Participants</h3>
	              <div className="flex -space-x-2 overflow-hidden">
	                <img className="w-8 h-8 rounded-full border-2 border-gray-700" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHx1c2VyfGVufDB8fHx8MTc1MzI5MjczOXww&ixlib=rb-4.1.0&q=80&w=1080" alt="User" keywords="user, profile, avatar, participant" />
	                <img className="w-8 h-8 rounded-full border-2 border-gray-700" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwzfHx1c2VyfGVufDB8fHx8MTc1MzI5MjczOXww&ixlib=rb-4.1.0&q=80&w=1080" alt="User" keywords="user, profile, avatar, participant" />
	                <img className="w-8 h-8 rounded-full border-2 border-gray-700" src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw0fHx1c2VyfGVufDB8fHx8MTc1MzI5MjczOXww&ixlib=rb-4.1.0&q=80&w=1080" alt="User" keywords="user, profile, avatar, participant" />
	                <img className="w-8 h-8 rounded-full border-2 border-gray-700" src="https://images.unsplash.com/photo-1640951613773-54706e06851d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw1fHx1c2VyfGVufDB8fHx8MTc1MzI5MjczOXww&ixlib=rb-4.1.0&q=80&w=1080" alt="User" keywords="user, profile, avatar, participant" />
	                <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-700 flex items-center justify-center text-xs">+3</div>
	              </div>
	            </div>
	            
	            <div className="bg-gray-700 p-4 rounded-md">
	              <h3 className="text-sm font-medium text-gray-300 mb-2">Meeting Platform</h3>
	              <div className="flex items-center">
	                <img className="w-6 h-6 mr-2" src="https://img.icons8.com/color/48/000000/zoom.png" alt="Zoom" keywords="zoom, meeting, platform, video call" />
	                <span>Zoom Meeting</span>
	              </div>
	            </div>
	            
	            <div className="bg-gray-700 p-4 rounded-md">
	              <h3 className="text-sm font-medium text-gray-300 mb-2">Recording</h3>
	              <div className="flex items-center text-primary-400">
	                <span className="material-symbols-outlined text-sm mr-1">play_circle</span>
	                <span>View recording</span>
	              </div>
	            </div>
	          </div>
	          
	          <div className="mb-6">
	            <h3 className="text-lg font-medium mb-3">AI Summary</h3>
	            <div className="bg-gray-700 p-5 rounded-md">
	              <p className="text-gray-300 mb-3">The team discussed progress on the new dashboard feature. Key highlights:</p>
	              <ul className="list-disc pl-5 space-y-2 text-gray-300">
	                <li>Backend API integration is 80% complete; Sarah will finish by Thursday.</li>
	                <li>UI design reviews are complete with minor changes requested.</li>
	                <li>QA team needs more detailed test cases; Michael will provide by EOD.</li>
	                <li>Launch timeline remains on track for end of month.</li>
	              </ul>
	              <div className="flex items-center justify-between mt-4 border-t border-gray-600 pt-4">
	                <div className="flex items-center space-x-4">
	                  <button className="flex items-center space-x-1 text-gray-400 hover:text-primary-400 transition-colors">
	                    <span className="material-symbols-outlined text-sm">thumb_up</span>
	                    <span>Accurate</span>
	                  </button>
	                  <button className="flex items-center space-x-1 text-gray-400 hover:text-primary-400 transition-colors">
	                    <span className="material-symbols-outlined text-sm">thumb_down</span>
	                    <span>Inaccurate</span>
	                  </button>
	                </div>
	                <button className="text-gray-400 hover:text-primary-400 transition-colors">
	                  <span className="material-symbols-outlined">refresh</span>
	                </button>
	              </div>
	            </div>
	          </div>
	          
	          <div className="mb-6">
	            <h3 className="text-lg font-medium mb-3">Action Items</h3>
	            <div className="space-y-2">
	              {[
	                { task: "Finish API integration", assignee: "Sarah", due: "Thursday" },
	                { task: "Provide QA test cases", assignee: "Michael", due: "Today" },
	                { task: "Schedule final design review", assignee: "Alex", due: "Tomorrow" },
	                { task: "Update project timeline", assignee: "You", due: "Friday" }
	              ].map((item, index) => (
	                <div key={index} className="flex items-center bg-gray-700 p-3 rounded-md">
	                  <div className="w-5 h-5 rounded border border-gray-500 mr-3 flex-shrink-0 hover:border-primary-400 transition-colors cursor-pointer"></div>
	                  <div className="flex-grow">
	                    <p className="text-gray-200">{item.task}</p>
	                    <div className="flex items-center mt-1">
	                      <span className="text-xs text-gray-400">Assigned to: {item.assignee}</span>
	                      <span className="mx-2 text-gray-600">•</span>
	                      <span className="text-xs text-gray-400">Due: {item.due}</span>
	                    </div>
	                  </div>
	                  <button className="w-8 h-8 rounded-full hover:bg-gray-600 flex items-center justify-center transition-colors">
	                    <span className="material-symbols-outlined text-sm text-gray-400">more_horiz</span>
	                  </button>
	                </div>
	              ))}
	            </div>
	            <button className="mt-3 flex items-center text-gray-400 hover:text-primary-400 transition-colors">
	              <span className="material-symbols-outlined text-sm mr-1">add</span>
	              <span>Add action item</span>
	            </button>
	          </div>
	          
	          <div>
	            <h3 className="text-lg font-medium mb-3">Transcription</h3>
	            <div className="bg-gray-700 p-5 rounded-md max-h-96 overflow-y-auto">
	              <div className="space-y-6">
	                {[
	                  { speaker: "John (Host)", time: "00:01:22", content: "Let's start with updates on the dashboard feature. Sarah, can you share your progress?" },
	                  { speaker: "Sarah", time: "00:01:45", content: "I've completed about 80% of the API integration. There were a few unexpected issues with data formatting, but I've resolved most of them. I should be able to finish everything by Thursday." },
	                  { speaker: "John (Host)", time: "00:02:30", content: "That sounds good. Any blockers we should be aware of?" },
	                  { speaker: "Sarah", time: "00:02:38", content: "Not at the moment. The documentation from the backend team was very helpful." },
	                  { speaker: "Michael", time: "00:03:15", content: "I wanted to mention that we'll need more detailed test cases for QA. The current ones don't cover all edge cases." },
	                  { speaker: "John (Host)", time: "00:03:45", content: "Can you prepare those by end of day, Michael?" },
	                  { speaker: "Michael", time: "00:03:52", content: "Yes, I'll take care of it." }
	                ].map((entry, index) => (
	                  <div key={index} className="flex">
	                    <div className="w-32 flex-shrink-0">
	                      <p className="font-medium text-gray-300">{entry.speaker}</p>
	                      <p className="text-xs text-gray-500">{entry.time}</p>
	                    </div>
	                    <p className="flex-grow text-gray-300">{entry.content}</p>
	                  </div>
	                ))}
	              </div>
	              <button className="mt-4 text-primary-400 hover:text-primary-300 transition-colors text-sm">
	                Show full transcript
	              </button>
	            </div>
	          </div>
	        </div>
	        
	        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
	          <h2 className="text-lg font-semibold mb-4">Upload a New Meeting</h2>
	          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-primary-500 transition-colors">
	            <span className="material-symbols-outlined text-4xl text-gray-500 mb-2">cloud_upload</span>
	            <p className="text-gray-300 mb-2">Drag and drop your meeting recording file here</p>
	            <p className="text-gray-500 text-sm mb-4">Supports MP3, MP4, WAV (max 2GB)</p>
	            <button className="bg-primary-600 hover:bg-primary-500 text-white py-2 px-4 rounded-md transition-colors">
	              Select File
	            </button>
	          </div>
	          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
	            <div>
	              <label className="block text-sm font-medium text-gray-400 mb-1">Meeting Title</label>
	              <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter meeting title" />
	            </div>
	            <div>
	              <label className="block text-sm font-medium text-gray-400 mb-1">Meeting Date</label>
	              <input type="date" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
	            </div>
	          </div>
	          {/* Next: "Add participant selection dropdown field" */}
	        </div>
	      </div>
	    </div>
	  </main>
	</div> 
        </div>
  )
}

export default App;