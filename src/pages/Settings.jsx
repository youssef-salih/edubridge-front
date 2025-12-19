import React from "react";
import Title from "../components/Title";
import CardTitle from "../components/cards/CardTitle";
import CardsContainer from "../components/cards/CardsContainer";
import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import PersonalInformation from "../components/forms/settings/PersonalInformation";
import SkillsAndExperience from "../components/forms/settings/SkillsAndExperience";
import Resume from "../components/forms/settings/Resume";

const Settings = () => {
  return (
    <div>
      <Title
        title={"My Profile"}
        children="Manage your personal information and preferences"
      />

      <Formik
        initialValues={{
          example: "",
        }}
        onSubmit={() => {}}
      >
        {(props) => (
          <Form className="">
            <div className="grid grid-cols-12 gap-5">
              {/* personnal info */}
              <div className="col-span-12 md:col-span-6 min-h-40 p-5 bg-white border border-gray-200   rounded-xl">
                <CardTitle
                  bigTitle={"Personal Information"}
                  className={"mb-4"}
                />

                <PersonalInformation formik={props} />
              </div>
              {/* skills & experiennces */}
              <div className="col-span-12 p-5 bg-white border border-gray-200 md:col-span-6 min-h-40 rounded-xl">
                <CardTitle
                  bigTitle={"Skills & Experience"}
                  className={"mb-4"}
                />

                <SkillsAndExperience formik={props} />
              </div>
              {/* resume */}
              <div className="col-span-12 p-5 bg-white border border-gray-200  min-h-40 rounded-xl">
                <CardTitle bigTitle={"Resume"} className={"mb-4"} />

                <Resume formik={props} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Settings;
