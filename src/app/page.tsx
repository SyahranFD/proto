import React from "react";
import Navbar from "@/app/components/navbar";
import YourProjectComponent from "@/app/components/landing-components/your-project-component";
import RecommendForYou from "@/app/components/landing-components/recommend-for-you";
import FeedComponent from "@/app/components/landing-components/feed-component";
import SuggestedForComponent from "@/app/components/landing-components/suggested-for-component";

export default async function Home() {
  return (
      <div className="w-screen h-screen">
        <Navbar/>
          <div className="bg-[#F9F9F9] px-[145px] pt-[50px] flex gap-[50px]">
              <div className="flex flex-col gap-[25px] w-full">
                  <YourProjectComponent/>
                  <RecommendForYou/>
                  <FeedComponent/>
              </div>

              <div className="w-1/5">
                  <SuggestedForComponent/>
              </div>
          </div>
      </div>
  );
}
