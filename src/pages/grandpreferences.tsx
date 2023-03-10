import { type NextPage } from "next";
import { useState } from "react";

const mockPreferences = [
  "Outdoor",
  "Seminars",
  "Career fair",
  "Dance",
  "Singing",
  "Arts",
];

const mockQuestions = [
  {
    q: "Which country is your grandparent from?",
    o: ["United States", "Central America", "North America"],
  },
  {
    q: "What language can they speak?",
    o: ["United States", "Central America", "North America"],
  },
  {
    q: "Has Dementia (or other mental issue)?",
    o: ["Yes", "No"],
  },
  {
    q: "Are they a veteran?",
    o: ["Yes", "No"],
  },
];

const Preferences: NextPage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://studentaffairs.jhu.edu/leed/wp-content/uploads/sites/42/2019/08/inflatable-chair-bigger-size.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="form-control">
              <h1 className="text-5xl font-bold">
                What is your grandparents' name?
              </h1>
              <label className="label">
                <span className="label-text">Your Grandparent's name</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input-bordered input"
                />
              </label>
            </div>
            {mockQuestions.map((e, i) => {
              return (
                <>
                  <h1 className="text-5xl font-bold" key={i}>
                    {e.q}
                  </h1>
                  <label className="input-group">
                    <select className="select w-full max-w-xs">
                      <option disabled selected>
                        Pick your preference
                      </option>
                      {/* {e.o.map(option => {
                        <option key={option}> {option} </option>
                      })} */}
                      <option>Homer</option>
                      <option>Marge</option>
                      <option>Bart</option>
                      <option>Lisa</option>
                      <option>Maggie</option>
                    </select>
                  </label>
                </>
              );
            })}

            <h1 className="text-5xl font-bold">Select their hobbies</h1>
            <div className="py-8"></div>
            <div className="space-x-1 ">
              {mockPreferences.map((e, i) => (
                <Badge key={i}>
                  <>{e}</>
                </Badge>
              ))}
            </div>
            <div className="py-8"></div>
            <button className="btn-primary btn">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

const Badge: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [selected, setSelected] = useState(false);
  const badgeCSS = selected
    ? "badge badge-lg gap-2 badge-info"
    : "badge badge-lg gap-2 badge-outline";
  console.log("badge info", badgeCSS);
  return (
    <div
      className={badgeCSS}
      //   className={"badge gap-2 " + selected ? "badge-info" : "badge-outline"}
      onClick={() => setSelected(!selected)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-4 w-4 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      {children}
    </div>
  );
};
export default Preferences;
