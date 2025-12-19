import React from "react";
import InputField from "../../InputField";

const SkillsAndExperience = ({ formik }) => {
  return (
    <div>
      <InputField
        autoComplete="off"
        label="Skills"
        name="skills"
        value={formik.values.skills}
        type="text"
        className={"col-span-6 "}
        classNameInput={"py-2 bg-gray/10"}
      />
      <InputField
        autoComplete="off"
        label="Bio"
        name="bio"
        value={formik.values.bio}
        type="textarea"
        className={"col-span-6 "}
        classNameInput={"py-2 bg-gray/10"}
      />
    </div>
  );
};

export default SkillsAndExperience;
