
import { useState } from 'react';
import Navbar from '../components/Navbar';
import lostIll from '../assets/lostIll.jpg';



const Lost = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    date: '',
    location: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="h-screen bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] flex flex-col">
      <Navbar />
      
      <div className="flex flex-row flex-grow h-full">
        {/* Left: Image Section */}
        <div className="w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1735660244714-8ef436246ea7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lost and Found"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right: Form Section */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="bg-black rounded-lg shadow-lg p-6 w-[80%] max-h-[90%] overflow-auto">
            <h1 className="text-2xl font-bold text-gray-200 mb-6 text-center font-arial">
              Report Lost Item
            </h1>
  
            <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-1">
              Item Name*
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
              required
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description*
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
              required
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date Lost*
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
              required
            />
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location*
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
              required
            />
          </div>
          
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Image (Optional)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
            />
          </div>
          
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Submit Report
            </button>
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Lost;