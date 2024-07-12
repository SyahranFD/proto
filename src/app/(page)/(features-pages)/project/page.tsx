

import {
  getAllProject,
  getSoftwareDevelopmentProject,
  getRecommendationProject,
  getProjectDesign,
  getProject2DAnimation,
  getProject3DAnimation,
  getFilterSearch,
} from "@/app/lib/services/api/project";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { Input } from "@/app/components/ui/input";
import ProjectList from "./components/project-list";
import InputSearch from "./components/input-search";


async function ProjectPage({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    
    const query = searchParams?.query || '';

    const dataAllProject = query ? [] : await getAllProject();
    const dataSoftwareDev = query ? [] : await getSoftwareDevelopmentProject();
    const dataDesign = query ? [] : await getProjectDesign();
    const data2DAnimation = query ? [] : await getProject2DAnimation();
    const data3DAnimation = query ? [] : await getProject3DAnimation();
    const searchProject = query ? await getFilterSearch(query) : [];


  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex flex-col justify-start items-center pt-16">
        <h1 className="text-4xl font-semibold "> Project Explore</h1>
        <p className="w-[30%] text-lg font-light text-center text-gray-200 mt-6">
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellusmattis tellusmattis
          tellus. Sed dignissim, metus nec
        </p>

        <div className="w-[30%] mt-8">
          <InputSearch />
        </div>

        <div className="w-full flex justify-center mt-8">
        <Tabs defaultValue="allProject" className="">
            <TabsList className="w-full flex justify-center items-center">
              <TabsTrigger style={{ fontSize: "28px" }} value="allProject">All Project</TabsTrigger>
              <TabsTrigger style={{ fontSize: "28px" }} value="softwareDevelopment">Software Development</TabsTrigger>
              <TabsTrigger style={{ fontSize: "28px" }} value="design">Design</TabsTrigger>
              <TabsTrigger style={{ fontSize: "28px" }} value="2dAnimation">2D Animation</TabsTrigger>
              <TabsTrigger style={{ fontSize: "28px" }} value="3dAnimation">3D Animation</TabsTrigger>
            </TabsList>

            <div className="w-full flex gap-2 mt-4 px-24">
            <TabsContent value="allProject">
                <ProjectList projects={query ? searchProject : dataAllProject} />
              </TabsContent>
              <TabsContent value="softwareDevelopment">
                <ProjectList projects={query ? searchProject : dataSoftwareDev} />
              </TabsContent>
              <TabsContent value="design">
                <ProjectList projects={query ? searchProject : dataDesign} />
              </TabsContent>
              <TabsContent value="2dAnimation">
                <ProjectList projects={query ? searchProject : data2DAnimation} />
              </TabsContent>
              <TabsContent value="3dAnimation">
                <ProjectList projects={query ? searchProject : data3DAnimation} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
