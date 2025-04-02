import React from 'react'
import { useState , useEffect } from 'react';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { use } from 'react';


const Image = ({conversation}) =>{
    const [defaultImage, setdefaultImage] = useState(false);
    const cld = new Cloudinary({ cloud: { cloudName: 'dokjryvwf' } });
  
    let ImageName = conversation.profilePicture || 'user_profiles/wospuh562wsffzxd8afr';
    useEffect(() => {
        if(ImageName.startsWith('https')){
            setdefaultImage(true);
        }
    }, []);

    const img = conversation
      ? cld
          .image(ImageName)
          .format('auto')
          .quality('auto')
          .resize(auto().gravity(autoGravity()).width(50).height(50))
      : null;
  return (
    <div className="w-12">
        {defaultImage ?
        <img src={conversation.profilePicture} alt="profile picture" className="w-12" /> :
         img && <AdvancedImage cldImg={img} alt="User profile picture" className="rounded-full" /> 
      }
    </div>
  )
}


export default Image