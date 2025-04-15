import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { FaCamera } from 'react-icons/fa';

const Found = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    date: '',
    location: '',
    image: null
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    handleImageFile(file);
  };

  const handleImageFile = (file) => {
    if (file) {
      setFormData({
        ...formData,
        image: file
      });

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left: Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-1/2 p-4"
      >
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=2070&auto=format&fit=crop"
            alt="Lost and Found"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Right: Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-1/2 flex items-center justify-center p-6"
      >
        {/* <div className="bg-[#1a1a1a] rounded-xl shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-white mb-6">
            Report Found Item
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Item Found*
              </label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a124e9] text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description*
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a124e9] text-white placeholder-gray-400"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Date Found*
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a124e9] text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Location Found*
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a124e9] text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image of Item*
              </label>
              <div
                className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${
                  isDragging ? 'border-[#a124e9]' : 'border-gray-600'
                } border-dashed rounded-lg hover:border-[#a124e9] transition-colors duration-300`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="space-y-1 text-center">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="mx-auto h-32 w-auto rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview(null);
                          setFormData({ ...formData, image: null });
                        }}
                        className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <>
                      <FaCamera className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-400">
                        <label className="relative cursor-pointer rounded-md font-medium text-[#a124e9] hover:text-[#8a1bc7] focus-within:outline-none">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            className="sr-only"
                            accept="image/*"
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-[#a124e9] text-white font-semibold rounded-lg hover:bg-[#8a1bc7] transition-all duration-300"
            >
              Submit Report
            </motion.button>
          </form>
        </div> */}
        <div>
          <h1>Report Found Item</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Found;
