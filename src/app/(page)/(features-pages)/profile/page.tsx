"use client"

import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { ComboboxDemo } from "@/app/components/ui/combobox";
import { Input } from "@/app/components/ui/input";

const ProfilePage: React.FC = () => {
  const [showAddPlatformForm, setShowAddPlatformForm] = useState(false);
  const handleAddPlatformClick = () => {
    setShowAddPlatformForm(true);
  };
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
      icon: <FaLinkedin size={24} />,
    },
    {
      id: 2,
      name: "Fadza",
      icon: <FaGithub size={24} />,
    },
    {
      id: 3,
      name: "Fattah Anggit",
      icon: <FaDribbble size={24} />,
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
    <div className="w-full relative">
      <div className=" absolute right-28 top-28">
        <Image
          className="rounded-full border-2 h-[280px] border-solid border-white shadow-xl"
          src={"/assets/image/user-avatar.png"}
          alt="profile picture"
          width={280}
          height={280}
          style={{
            objectFit: "cover",
            color: "white",
          }}
        />
      </div>
      <div className="w-full h-screen  flex flex-col pb-8">
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
        <div className="w-full h-[80%] flex">
          <div className="w-1/5 h-full  pt-12 pl-16">
            <h2 className="text-2xl font-semibold text-black">
              Portflio Platform
            </h2>
            {platforms.map((item: platformData, index: number) => (
              <div key={index} className="flex gap-2 mt-12">
                {item.icon}
                <h2 className="text-lg font-medium text-black">{item.name}</h2>
              </div>
            ))}
            {showAddPlatformForm ? (
              <form className="mt-8 " >
                <div className="flex flex-col gap-4">
                  <Input
                  className="h-auto py-3"
                    placeholder={"Enter name platform link"}
                    title={"Name Platform"}
                    name={"name"}
                    // value={}
                    // onChange={}
                  />
                  <Input
                    placeholder={"Enter your platform link"}
                    title={"Platform Link"}
                    name={"url"}
                    // value={}
                    // onChange={}
                  />
                  <div className="flex gap-3 ">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-auto  h-auto py-3 px-4 cursor-pointer mt-8  rounded-xl"
                    >
                

                      <h1 className="font-light text-normal ">Save</h1>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-auto h-auto py-3 px-4 cursor-pointer mt-8 border-solid border-black rounded-xl"
                    >
                      <h1 className="font-light text-normal ">Cancel</h1>
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <Button
                variant="default"
                size="sm"
                className="w-auto flex gap-2 h-auto py-3 px-4 cursor-pointer mt-8 rounded-xl"
                onClick={handleAddPlatformClick}
              >
                <FiPlus size={20} />

                <h1 className="font-light text-normal ">
                  Add Portofolio Platform
                </h1>
              </Button>
            )}
            {/* <Button
              variant="default"
              size="sm"
              className="w-auto flex gap-2 h-auto py-3 px-4 cursor-pointer mt-8 rounded-xl"
            >
              <FiPlus size={20} />

              <h1 className="font-light text-normal ">
                Add Portfolio Platforms
              </h1>
            </Button> */}
          </div>

          <div className="w-4/5 h-full  pt-12 pl-16">
            <div className="w-full flex flex-col items-start">
              <div className="flex gap-4 items-center mb-4">
                <h2 className="text-4xl font-medium text-black">
                  Fattah Anggit Al Dzakwan
                </h2>
                <MdEdit size={32} />
              </div>
            </div>
            <h4 className="text-gray-400 text-[24px] flex justify-start gap-3">
              Mobile Developer{" "}
              <span className="text-gray-400 text-[24px] font-normal">
                (18)
              </span>
            </h4>
            <div className="flex flex-wrap gap-3">
              {progammingLanguages.map(
                (item: progammingLanguageData, index: number) => (
                  <div
                    key={index}
                    className="mt-8 px-16 py-2 bg-blue-50 rounded-3xl"
                  >
                    <h2 className="text-lg font-medium text-blue-400">
                      {item.name}
                    </h2>
                  </div>
                )
              )}
            </div>
            <div className="w-full mt-8 flex justify-between">
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
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
              <div className="mr-24">
                <ComboboxDemo />
              </div>
            </div>
            <div className="w-full justify-end inline-flex pr-24 pt-4 ">
              <Button
                variant="default"
                size="sm"
                className="w-auto flex gap-2 h-auto py-3 px-4 cursor-pointer mt-8 rounded-xl"
              >
                <FiPlus size={20} />

                <h1 className="font-light text-normal ">Add Project</h1>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
