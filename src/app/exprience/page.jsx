import EducationExperiencePage from "@/component/Client/EducationExpriencePage";
import MasterLayout from "@/component/Layout/MasterLayout";
import React from "react";

const page = async () => {
  const educationResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/education`,
    { cache: "no-store" }
  );
  const experienceResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/exprience`,
    { cache: "no-store" }
  );

  const educationData = await educationResponse.json();
  const experienceData = await experienceResponse.json();

  return (
    <MasterLayout>
      <EducationExperiencePage
        educationData={educationData.status ? educationData.data : []}
        experienceData={experienceData.status ? experienceData.data : []}
      />
    </MasterLayout>
  );
};

export default page;
