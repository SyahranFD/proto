

import Image from 'next/image';
import React, { ReactNode } from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';

const ProfilePage:React.FC = () => {

    interface platformData {
        id: number;
        name: string;
        icon: ReactNode;
      }
      
    interface progammingLanguageData {
        id: number;
        name: string;
      }
    
      interface jobdeskData {
        id: number;
        name: string;
      }
    
      const platforms: platformData[] = [
        {
          id: 1,
          name: "Fattah Anggit Al Dzakwan",
          icon: <FaLinkedin size={20} />,
        },
        {
          id: 2,
          name: "Fadza",
          icon: <FaGithub size={20} />,
        },
        {
          id: 3,
          name: "Fattah Anggit",
          icon: <FaDribbble size={20} />,
        },
      ];
    
      const progammingLanguages: progammingLanguageData[] = [
        {
          id: 1,
          name: "Flutter",
        },
        {
          id: 2,
          name: "JawaScript",
        },
        {
          id: 3,
          name: "Laravel",
        },
        {
          id: 4,
          name: "Javva",
        },
      ];
      const jobdesks: jobdeskData[] = [
        {
          id: 1,
          name: "UI/UX Design",
        },
        {
          id: 2,
          name: "Frontend",
        },
        {
          id: 3,
          name: "Backend",
        },
      ];
 return (
  <div className='w-full'>
    <div className='w-full h-screen  flex flex-col pb-8'>

        <div className="w-full h-[20%] bg-red-100">
          <Image
            src={"/assets/image/banner-profile.png"}
            alt="background profile"
            width={1000}
            height={1000}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className='w-full h-[80%] flex'>
            <div className='w-1/5 h-full  pt-12 pl-16'>
            <h2 className="text-2xl font-semibold text-black">Portflio Platform</h2>
            {platforms.map((item: platformData, index: number) => (
              <div key={index} className="flex gap-2 mt-12">
                {item.icon}
                <h2 className="text-normal font-medium text-black">
                  {item.name}
                </h2>
              </div>
            ))}

            </div>
            
            <div className='w-4/5 h-full  pt-12 pl-16'>

            </div>

        </div>

    </div>
  </div>
 );
};



export default ProfilePage;