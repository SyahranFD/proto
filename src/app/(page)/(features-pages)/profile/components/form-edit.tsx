"use client";

import { Button } from "@/app/components/ui/button";
import React, { ChangeEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useFormik } from "formik";
import { postPortofolioPlatform, putEditUser } from "@/app/lib/services/api/profile";
import Loading from "@/app/components/ui/loading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { useFetch } from "@/app/lib/services/api/actions";
import { CurrentUserResponse } from "@/app/lib/services/model/current_user";

const FormLayoutEdit: React.FC = () => {
  const { data: dataUser, } = useFetch<CurrentUserResponse>({
    endpoint: "/users/show",
  });
  const [showAddPlatformForm, setShowAddPlatformForm] = useState(false);

  const handleSavePlatformClick = async () => {
    
    await mutate({
      full_name: formik.values.full_name,
      age: formik.values.age,
      job: formik.values.job,
      profile_picture: formik.values.profile_picture,
      profile_background: formik.values.profile_background,
    });
    setShowAddPlatformForm(false);
    
  };

  const formik = useFormik({
    initialValues: {
      full_name: "",
      age: "",
      job: "",
      profile_picture: "",
      profile_background: "",
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

  const { mutate, isLoading } = putEditUser();

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="items-center gap-4">
              <Label htmlFor="full_name" className="text-right">
                Full Name
              </Label>
              <Input
                id="full_name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
                name={"full_name"}
                value={formik.values.full_name ?? dataUser?.data.full_name}
                onChange={handleForm}
                placeholder={dataUser?.data.full_name}
              />
            </div>
            <div className="items-center gap-4">
              <Label htmlFor="age" className="text-right">
                Age
              </Label>
              <Input
                id="age"
                defaultValue="@peduarte"
                className="col-span-3"
                name={"age"}
                value={formik.values.age ?? dataUser?.data.age}
                onChange={handleForm}
                placeholder={dataUser?.data.age?.toString()}
              />
            </div>
            <div className=" items-center gap-4">
              <Label htmlFor="job" className="text-right">
                Job
              </Label>
              <Input
                id="job"
                defaultValue="@peduarte"
                className="col-span-3"
                name={"job"}
                value={formik.values.job ?? dataUser?.data.job}
                onChange={handleForm}
                placeholder={dataUser?.data.job!}
              />
            </div>
            <div className=" items-center gap-4">
              <Label htmlFor="profile_picture" className="text-right">
                Profile Picture
              </Label>
              <Input
                id="profile_picture"
                defaultValue="@peduarte"
                className="col-span-3"
                name={"profile_picture"}
                value={formik.values.profile_picture ?? dataUser?.data.profile_picture}
                onChange={handleForm}
                placeholder={dataUser?.data.profile_picture}
              />
            </div>
            <div className=" items-center gap-4">
              <Label htmlFor="profile_background" className="text-right">
                Profile Background
              </Label>
              <Input
                id="profile_background"
                defaultValue="@peduarte"
                className="col-span-3"
                name={"profile_background"}
                value={formik.values.profile_background ?? dataUser?.data.profile_background}
                onChange={handleForm}
                placeholder={dataUser?.data.profile_background!}
              />
            </div>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <DialogFooter>
              <Button onClick={handleSavePlatformClick} type="submit">
                Save changes
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormLayoutEdit;
