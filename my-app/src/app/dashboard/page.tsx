"use client";

import React, { ChangeEvent, useState } from "react";
import { AppState, IProps } from "@/interfaces";
import InputCustom from "@/components/ui/InputCustom";
// export default function Home() {
//   const [title, setTitle] = useState("");
//   const HandleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     console.log(title);
//   };
//   return (
//     <div>
//       <div>
//         <h1>Enter Name</h1>
//       </div>
//       <form onSubmit={HandleSubmit}>
//         <input
//           classNameName="text-black"
//           type="text"
//           placeholder="Type Your Name"
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//           value={title}
//         />
//         <button type="submit"> Predict App</button>
//       </form>
//       <h1>Your Name {title}</h1>
//     </div>
//   );
// }

const Home = () => {
  const [state, setState] = useState<AppState>({
    title: "ANA AHMED",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    ImageUrl:
      "data:image/png;base64,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",
    buttonText: "Predict Data",
    buttonURL: "",
  });
  const handleChange = <T extends keyof AppState>(
    name: T,
    value: AppState[T]
  ) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const Fields: IProps[] = [
    {
      type: "text",
      placeholder: "Enter Your Title Here",
      name: "title",
      value: state.title,
    },
    {
      type: "text",

      placeholder: "Enter Your ImageURL Here",
      name: "ImageUrl",
      value: state.ImageUrl,
    },
    {
      type: "textarea",

      placeholder: "Enter Your description Here",
      name: "description",
      value: state.description,
    },
    {
      type: "text",

      placeholder: "Enter Your buttonURL Here",
      name: "buttonURL",
      value: state.buttonURL,
    },
    {
      type: "text",

      placeholder: "Enter Your buttonText Here",
      name: "buttonText",
      value: state.buttonText,
    },
  ];
  return (
    <div className="flex">
      <div className="w-1/3 h-screen" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-aut bg-gray-700  flex flex-col">
          <span className="flex items-center p-2 text-gray-900  dark:text-white ">
            Dashboard
          </span>

          {Fields.map((item) => (
            <React.Fragment key={item.name}>
              {" "}
              <InputCustom
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                value={item.value}
                onChange={(e: { target: { value: string } }) =>
                  handleChange(item.name, e.target.value)
                }
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div
        className="w-2/3 h-screen bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${state.ImageUrl})` }}>
        <div className="flex flex-col">
          <div className="text-center">
            <p className="text-4xl text-white font-bold max-w-lg break-words m-auto ">
              {state.title}
            </p>
            <p className="text-lg text-white max-w-lg break-words m-auto">
              {state.description}
            </p>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 p-5 rounded-lg mt-5 max-w-lg break-words m-auto">
              {" "}
              {state.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
{
  /** <input
            type="text"
            className="m-3 rounded-lg bg-slate-600 text-white  h-10 placeholder:p-2 p-4 "
            placeholder="Enter Your Title Here"
            name="title"
            value={state.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <textarea
            className="m-3 rounded-md bg-slate-600 text-white  h-20 placeholder:p-2 p-4"
            placeholder="Enter Your description Here"
            name="description"
            value={state.description}
            onChange={(e) =>
              handleChange("description", e.target.value)
            }></textarea>{" "}
          <input
            type="text"
            className="m-3 rounded-lg bg-slate-600 text-white  h-10 placeholder:p-2 p-4"
            placeholder="ImageUrl"
            name="ImageUrl"
            value={state.ImageUrl}
            onChange={(e) => handleChange("ImageUrl", e.target.value)}
          />{" "}
          <input
            type="text"
            className="m-3 rounded-lg bg-slate-600 text-white  h-10 placeholder:p-2 p-4"
            placeholder="Button Text"
            name="buttonText"
            value={state.buttonText}
            onChange={(e) => handleChange("buttonText", e.target.value)}
          />{" "}
          <input
            type="text"
            className="m-3 rounded-lg bg-slate-600 text-white  h-10 placeholder:p-2 p-4"
            placeholder="buttonURL"
            name="buttonURL"
            value={state.buttonURL}
            onChange={(e) => handleChange("buttonURL", e.target.value)}
          />{" "} */
}
