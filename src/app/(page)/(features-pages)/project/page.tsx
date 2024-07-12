import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { ComboboxDemo } from "@/app/components/ui/combobox";

async function ProjectPage() {
  interface progammingLanguageData {
    id: number;
    name: string;
  }

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
  ];

  const tabContents = [
    {
      id: 1,
      value: "projectCollaboration",
      title: "Noesantara - Indonesia Culture",
      description: "Website",
      imageSrc: "/assets/image/neosantara-mockup.png",
      jobdesks: [
        { id: 1, name: "UI/UX Design" },
        { id: 2, name: "Frontend" },
        { id: 3, name: "Backend" },
      ],
      collaborators: [
        { id: 1, imageSrc: "/assets/image/user-avatar.png" },
        { id: 2, imageSrc: "/assets/image/user-avatar.png" },
        { id: 3, imageSrc: "/assets/image/user-avatar.png" },
      ],
      collaboratorCount: 4,
      collaborationText: "4 Collaboration in this project",
    },
    {
      id: 2,
      value: "projectCollaboration",
      title: "Noesantara - Indonesia Culture",
      description: "Website",
      imageSrc: "/assets/image/neosantara-mockup.png",
      jobdesks: [
        { id: 1, name: "UI/UX Design" },
        { id: 2, name: "Frontend" },
        { id: 3, name: "Backend" },
      ],
      collaborators: [
        { id: 1, imageSrc: "/assets/image/user-avatar.png" },
        { id: 2, imageSrc: "/assets/image/user-avatar.png" },
        { id: 3, imageSrc: "/assets/image/user-avatar.png" },
      ],
      collaboratorCount: 4,
      collaborationText: "4 Collaboration in this project",
    },
  ];

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex flex-col justify-start items-center pt-16">
        <h1 className="text-4xl font-semibold "> Project Explore</h1>
        <p className="w-1/2 text-lg font-light text-center text-gray-200 mt-6">
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus est a, mattis tellus. Sed
        </p>
        
        <div className="w-full flex justify-center">
        <Tabs defaultValue="account" className="">
                <TabsList  className="">
                  <TabsTrigger
                    style={{ fontSize: "28px" }}
                    value="projectCollaboration"
                  >
                    Project Collaboration
                  </TabsTrigger>
                  <TabsTrigger
                    style={{ fontSize: "28px" }}
                    value="personalProject"
                  >
                    Personal Project
                  </TabsTrigger>
                </TabsList>
                <div className="w-full flex gap-4 mt-4">
                  {tabContents.map((tab, index) => (
                    <TabsContent key={index} value={tab.value}>
                      {tab.imageSrc && (
                        <div className="w-[400px] shadow-xl rounded-xl">
                          <Image
                            src={tab.imageSrc}
                            alt="project image"
                            width={1000}
                            height={1000}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          />
                          <div className="flex flex-col items-start p-4">
                            <h2 className="text-2xl font-medium text-black mb-1">
                              {tab.title}
                            </h2>
                            <h4 className="text-black text-lg">
                              {tab.description}
                            </h4>
                            <div className="flex flex-wrap gap-3 mt-3">
                              {tab.jobdesks.map((item, index) => (
                                <div
                                  key={index}
                                  className="px-4 py-1 bg-blue-50 rounded-3xl"
                                >
                                  <h2 className="text-sm font-medium text-blue-400">
                                    {item.name}
                                  </h2>
                                </div>
                              ))}
                            </div>
                            <div className="w-1/2 relative items-start mt-8">
                              {tab.collaborators.map((collaborator, index) => (
                                <div
                                  key={index}
                                  style={{
                                    left: index * 24,
                                  }}
                                  className="absolute"
                                >
                                  <Image
                                    src={collaborator.imageSrc}
                                    alt="project people"
                                    width={35}
                                    height={35}
                                    className="rounded-full"
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="w-full pl-28 items-end pt-2">
                              <h2 className="text-normal font-medium text-black">
                                {tab.collaborationText}
                              </h2>
                            </div>
                          </div>
                        </div>
                      )}
                      {!tab.imageSrc && <div>{tab.title}</div>}
                    </TabsContent>
                  ))}
                </div>
              </Tabs>

        </div>
        

        {/* <div className="w-auto flex flex-col  h-auto bg-white px-3 py-4 shadow-xl rounded-lg ">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-medium "> Proto - Project Collaboration Platform</h1>
              <h4 className="text-normal font-medium text-gray-300">
                {" "}
                Websitee
              </h4>
            </div>

            <p className="text-lg font-light">1/3</p>
          </div>
          <img
            className="rounded-full  h-8 w-8  border-solid  shadow-xl ml-auto"
            src={"/assets/image/user-avatar.png"}
            alt="profile picture"
            width={0}
            height={0}
            style={{
              objectFit: "cover",
              color: "white",
            }}
          />
          <div className="flex justify-between">
            <div className="flex  gap-3">
              {progammingLanguages.map(
                (item: progammingLanguageData, index: number) => (
                  <div
                    key={index}
                    className="mt-8 px-3 py-2 bg-blue-50 rounded-3xl"
                  >
                    <h2 className="text-xs font-light text-blue-400">
                      {item.name}
                    </h2>
                  </div>
                )
              )}
            </div>
            <div className="inline-flex  mt-3">
          <Button
            variant="default"
            size="sm"
            className="w-auto flex py-1 px-6 cursor-pointer rounded-xl"
          >
           
            <h1 className="font-light text-xs">Join</h1>
          </Button>
        </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default ProjectPage;
