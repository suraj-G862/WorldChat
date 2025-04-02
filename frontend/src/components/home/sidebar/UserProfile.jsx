import React, { useState } from 'react';
import { useAuthContext } from '../../../context/AuthContext';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import Image from './Image';

const UserProfile = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dokjryvwf' } });
  const { authUser } = useAuthContext();

  let ImageName = authUser.profilePicture || 'user_profiles/wospuh562wsffzxd8afr'; //default image
  if(ImageName.startsWith('https')){
    ImageName = 'user_profiles/wospuh562wsffzxd8afr';
}
  const img = authUser
    ? cld
        .image(ImageName)
        .format('auto')
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(50).height(50))
    : null;

  const [toggle, setToggle] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profileImage) {
      setUploadMessage('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', profileImage);
    formData.append('ImageName', ImageName);
    formData.append('userId', authUser._id);

    setIsLoading(true);
    setUploadMessage('Uploading image...');

    try {
      const response = await fetch('http://localhost:5000/api/users/upload-profile-image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setUploadMessage('Image uploaded successfully!');
      } else {
        setUploadMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setUploadMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <div onClick={() => setToggle(!toggle)} className="cursor-pointer rounded-full overflow-hidden w-12 h-12">
        {/* {img && <AdvancedImage cldImg={img} alt="User profile picture" />} */}
        <Image conversation={authUser}/>
      </div>

      {toggle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Set Profile Image</h2>
           
            <button
              onClick={() => setToggle(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="file"
                name="profileImage"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
              >
                Submit
              </button>
            </form>

            {isLoading ? (
              <div className="flex justify-center mt-4">
                <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-8 h-8 animate-spin"></div>
              </div>
            ) : (
              <p className="mt-4 text-sm text-gray-600">{uploadMessage}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
