"use client";
import { Input } from "@/app/components/ui/input";
import { sendRequestProject, storeProject } from "@/app/lib/services/api/project";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ComboboxCategoryProject } from "./components/combobox-category";
import 'react-tagsinput/react-tagsinput.css';
import TagsInput from 'react-tagsinput';
import {useRouter} from "next/navigation";
import Loading from "@/app/components/ui/loading";



interface SkillRequest {
  name:string;
}

export default function ProjectCollaboration() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [maxParticipant, setMaxParticipant] = useState<number | string>("");
  const [category, setCategory] = useState("");
  const [isPaid, setIsPaid] = useState(0);
  const [tags, setTags] = useState<string[]>([]);

  const {push} = useRouter()
  const [loading ,setLoading] = useState(false);


  const postProject = async () => {
    const projectData: ProjectRequest = {
      title: title,
      description: description,
      max_participant: typeof maxParticipant === "number" ? maxParticipant : 0,
      category: category,
      is_paid: isPaid,
    };


    const data : SkillRequest[] = []

    tags.map((tag) => {
      data.push({name: tag})
    })
    setLoading(true)
    const response = await storeProject(projectData);

    data.map(async (skillData) => {
        await sendRequestProject(response.id, skillData.name);
    })
    setLoading(false)
    push("/")



    
  };

  const handleMaxParticipantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMaxParticipant(value === "" ? "" : parseInt(value));
  };

  return (
    <div className="w-full h-[85vh] pt-[50px] flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="font-semibold text-2xl text-primary">
          Project Collaboration
        </h1>
        <p className="font-light text-[#A9A9A9]">
          Turn your idea into reality and gain new connection
        </p>

        <div className="w-[45%] flex flex-col gap-[30px] items-center">
          <div className="w-full flex flex-col gap-3">
            <label className="font-medium text-lg">Title*</label>
            <Input
              placeholder="Project Name"
              className="h-14 rounded-lg"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <label className="font-medium text-lg">Description</label>
            <Input
              placeholder="Describe your project"
              className="h-14 rounded-lg"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <div className="w-full flex gap-8">
            <div className="w-full flex flex-col gap-3">
              <label className="font-medium text-lg">Max Participant*</label>
              <Input
                type="number"
                placeholder="Max Participant"
                className="h-14 rounded-lg"
                value={maxParticipant}
                onChange={handleMaxParticipantChange}
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <label className="font-medium text-lg">Project Category</label>
              <ComboboxCategoryProject onSelect={setCategory} />
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <label className="font-medium text-lg">Skills Requirement</label>
            <div className="flex items-center gap-5">
              <TagsInput
                value={tags}
                onChange={setTags}
                inputProps={{ placeholder: "Add a skill" }}
              />
            </div>
          </div>

          <div className="w-full flex gap-3 items-center">
            <label className="font-medium text-lg">Project Paid</label>
            <input
              type="checkbox"
              onChange={(event) =>
                setIsPaid(event.target.checked ? 1 : 0)
              }
            />
          </div>
        </div>
      </div>

      <button
        className="w-[45%] bg-primary rounded-2xl h-[60px]"
        onClick={postProject}
      >
        <h3 className="font-medium text-white text-lg">{
          loading ?<Loading/>: "Create Project"
        }</h3>
      </button>
    </div>
  );
}
