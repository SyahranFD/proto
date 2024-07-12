"use client"

import { Button } from "@/app/components/ui/button";
import React, { ChangeEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useFormik } from "formik";
import { Input } from "@/app/components/ui/input";
import { postPortofolioPlatform } from "@/app/lib/services/api/profile";
import Loading from "@/app/components/ui/loading";

const FormLayoutPortoPlatform: React.FC = () => {
  
  const [showAddPlatformForm, setShowAddPlatformForm] = useState(false);
  const handleAddPlatformClick = () => {
    setShowAddPlatformForm(true);
  };

  const handleCancelPlatformClick = () => {
    setShowAddPlatformForm(false);
  };

  const handleSavePlatformClick = async () => {
    await mutate({
      name: formik.values.name,
      url: formik.values.url,
    });
    setShowAddPlatformForm(false);
  };


  const formik = useFormik({
    initialValues: {
      name: "",
      url: "",
    },
    onSubmit: async (values) => {
      try {
        console.log("Submitting values:", values);
        await mutate(values);
        setShowAddPlatformForm(false);
      } catch (error) {
        console.error("Error submitting form:", error);
      } 
    },
  });

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  const { mutate, isLoading } = postPortofolioPlatform();

  return (
    <div>
      {showAddPlatformForm ? (
        
          <div>
            <Input
              className="h-auto py-3"
              placeholder={"Enter name platform link"}
              title={"Name Platform"}
              name={"name"}
              value={formik.values.name}
              onChange={handleForm}
            />
            <Input
              placeholder={"Enter your platform link"}
              title={"Platform Link"}
              name={"url"}
              value={formik.values.url}
              onChange={handleForm}
            />
            <div className="flex gap-3 mt-4">
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  <Button
                  onClick={handleSavePlatformClick}
                    type="submit" 
                    variant="default"
                    size="sm"
                    className="w-auto h-auto py-3 px-4 cursor-pointer mt-8 rounded-xl"
                  >
                    <h1 className="font-light text-normal">Save</h1>
                  </Button>
                  <Button
                    onClick={handleCancelPlatformClick}
                    variant="outline"
                    size="sm"
                    className="w-auto h-auto py-3 px-4 cursor-pointer mt-8 border-solid border-black rounded-xl"
                  >
                    <h1 className="font-light text-normal">Cancel</h1>
                  </Button>
                </>
              )}
            </div>
          </div>
      ) : (
        <div className="inline-flex mt-3">
          <Button
            variant="default"
            size="sm"
            className="w-auto flex gap-2 h-auto py-3 px-4 cursor-pointer mt-8 rounded-xl"
            onClick={handleAddPlatformClick}
          >
            <FiPlus size={20} />
            <h1 className="font-light text-normal">Add Portofolio Platform</h1>
          </Button>
        </div>
      )}
    </div>
  );
}

export default FormLayoutPortoPlatform;


