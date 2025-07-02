import { LuCalendarDays } from 'react-icons/lu'

import { FaCarSide } from 'react-icons/fa'
import { FaPeopleRoof } from 'react-icons/fa6'
import './supply.css'

const OurAchievement = () => {
  return (
    <>
      <div className="pt-40">
        <div className="drGroupPic bg-fixed h-[450px]">
          <div className="px-6 md:pt-44 pt-20 bg-black bg-opacity-60 h-full">
            <div className="container">
              <div className="md:flex space-y-4 justify-between item-center">
                {/* Satisfied patients */}
                <div className="flex space-x-3 md:pt-3">
                  <FaCarSide size={50} className="text-[#023e8a] text-[60px]" />

                  <div className="border-r-4 border-[#023e8a]"></div>
                  <div className="text-white ">
                    <p className="md:text-3xl text-2xl font-semibold"></p>
                    <h2 className="text-2xl font-semibold text-white pt-3">
                      Trusted Food Distributor{' '}
                    </h2>
                  </div>
                </div>
                {/* Years of experience */}
                <div className="flex space-x-3">
                  <LuCalendarDays size={60} className="text-[#023e8a] " />
                  <div className="border-r-4 border-[#023e8a]"></div>
                  <div className="text-white ">
                    <p className="md:text-3xl text-2xl font-semibold"> </p>
                    <h2 className="text-2xl font-semibold text-white pt-3">
                      Years of Quality Service
                    </h2>
                  </div>
                </div>
                {/* Successful surgeries */}
                <div className="flex space-x-3">
                  <FaPeopleRoof size={60} className="text-[#023e8a]" />
                  <div className="border-r-4 border-[#023e8a]"></div>
                  <div className="text-white ">
                    <p className="md:text-3xl text-2xl font-semibold"> </p>
                    <h2 className="text-2xl font-semibold text-white pt-3">
                      Experienced Food Partner
                    </h2>
                  </div>
                </div>
                {/* Specialist doctors */}
                {/* <div className="flex space-x-3">
                  <FaUserDoctor size={60} className="text-[#0165ff] " />
                  <div className="border-r-2 border-[#0165ff]"></div>
                  <div className="text-white ">
                    <p className="md:text-3xl text-2xl font-semibold"> </p>
                    <h2 className="text-2xl font-semibold text-white">
                      Specialist doctors
                    </h2>
                  </div>
                </div> */}
                {/* Working Hours */}
                {/* <div className="flex space-x-3">
                  <GoStopwatch size={60} className="text-[#0165ff] " />
                  <div className="border-r-2 border-[#0165ff]"></div>
                  <div className="text-white text-2xl font-semibold">
                    <h2>Working Hours</h2>
                    <p>800</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurAchievement
