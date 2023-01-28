import { type NextPage } from "next";

const Organizer: NextPage = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col justify-center pl-10">
        <div className="text-5xl">Add information about your event</div>
        {/* <div className="mx-auto w-full place-content-center content-center justify-items-center bg-black"> */}
        <div className="form-control max-w-xs justify-center">
          <label className="label">
            <span className="label-text">What is the event name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input w-full max-w-xs"
          />
        </div>
        {/* </div> */}

        <div className="mx-auto w-full place-content-center content-center justify-items-center">
          <div className="form-control max-w-xs content-center">
            <label className="label">
              <span className="label-text">What is the link to event?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full max-w-xs"
            />
          </div>
        </div>

        <div className="mx-auto w-full place-content-center content-center justify-items-center">
          <div className="form-control max-w-xs content-center">
            <label className="label">
              <span className="label-text">
                What is a description for the event?
              </span>
            </label>
            <textarea
              //   type="textarea"
              placeholder="Type here"
              className="textarea-bordered textarea"
            />
          </div>
        </div>
      </div>
      {/* <select className="select-bordered select w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">
                      What are the majors you invite for the event?
                    </span>
                  </label>
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Freshman</option>
                  <option>Sophmore</option>
                  <option>Junior</option>
                  <option>Senior</option>
                </select> */}
    </>
  );
};
export default Organizer;
