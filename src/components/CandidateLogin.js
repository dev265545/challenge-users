import axios from "axios";
import { useRouter } from "next/router";
import useStore from "@/store/store";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
export default function CandidateLogin() {
    const router = useRouter();
  console.log("ds");
  const [password, SetPassword] = useState("");
  const [username, SetUserName] = useState("");
  const [toast,setToast] = useState(false)
  const setToken = useStore((state) => state.setToken);
  const onSubmit = async () => {
    try {
      const response = await fetch(
        "https://frontendtestapi.staging.fastjobs.io/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
          credentials: "include",
        }
      );
console.log(response)
      if (response.ok) {
        // const cookies = response.headers.get("set-cookie");
        // const authToken = cookies.split(";")[0].split("=")[1];
        // setToken(authToken);
        router.push("/tableview");
      } else {
       setToast(true)
      }
    } catch (error) {
      // An error occurred while trying to authenticate
    }
  };

  return (
    <>
      <div className="relative bg-[rgba(93,95,239,1)]  text-left min-h-screen  min-w-fit overflow-clip">
        <div>
          <div className="left-0 top-0 absolute w-[1440px] h-full bg-[rgba(93,95,239,1)]" />
        </div>
        <div>
          <div className="absolute rounded-full w-[1276px] h-[1276px] left-[289px] top-[-147px]   shadow-middle bg-[rgba(103,104,241,0.25)] " />
        </div>
        <div>
          <div className="absolute rounded-full w-[828px] h-[828px] left-[501px] top-[77px] shadow-middle bg-[rgba(120,121,241,0.26)]" />
        </div>
        <div>
          <div className="absolute rounded-full w-[418px] h-[418px] left-[700px] top-[282px] shadow-middle bg-[rgba(165,166,246,0.26)]" />
        </div>
        <div>
          <div className="top-0 absolute w-[543px] h-[1024px] left-[897px] bg-[rgba(28,29,33,1)]" />
        </div>
        <div>
          <div className="h-6 absolute w-[78px] left-[977px] top-[335px]" />
        </div>
        {toast && (
          <div class="fixed z-50 top-0    right-48 max-w-lg rounded-lg text-gray-400 bg-gray-800 px-4 py-3 shadow-middle shadow-gray-400/10">
            <div class="flex items-center gap-2">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-200 bg-red-800 rounded-lg dark:bg-red-800 dark:text-red-200">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Error icon</span>
              </div>
              <p class="font-medium">
                Wrong password or username
              </p>
              <div class="ml-3">
                <button onClick={()=>setToast(false)} class=" hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg p-1">
                  <span class="sr-only">Close</span>
                  <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
        <div>
          <div className="absolute top-52 gap-6 flex flex-col items-start left-[977px]">
            <div
              className={`h-24 relative gap-6 text-white font-semibold w-[230px] font-['Poppins']`}
            >
              <p className="left-0 top-0 absolute m-0 w-[230px] text-[32px] leading-[normal]">
                For us to stay in touch
              </p>
            </div>
            <div className={`gap-4 flex flex-col items-center font-['Inter']`}>
              <div className="gap-2 flex flex-col items-start font-semibold text-[rgba(179,179,179,1)]">
                <div className="gap-3">
                  <div className="gap-0.5 w-[74px]">
                    <p className="leading-6 m-0 text-[15px] tracking-[-0.16px]">
                      Username
                    </p>
                  </div>
                </div>
                <div className="gap-2">
                  <div className="gap-[70px]">
                    <div className="w-full gap-5">
                      <div className="w-full gap-3">
                        <input
                          onChange={(e) => {
                            SetUserName(e.target.value);
                          }}
                          value={username}
                          className="w-[296px] h-12 border-solid border-2 rounded-xl bg-transparent p-2  text-center border-[rgba(245,245,245,1)]"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-2 flex flex-col items-start font-semibold text-[rgba(179,179,179,1)]">
                <div className="gap-0.5">
                  <p className="leading-6 m-0 text-[15px] tracking-[-0.16px]">
                    Password
                  </p>
                </div>
                <div className="gap-2">
                  <div className="gap-[70px]">
                    <div className="w-full gap-5">
                      <div className="w-full gap-3">
                        <input
                          onChange={(e) => {
                            SetPassword(e.target.value);
                          }}
                          value={password}
                          className="w-[296px] h-12 border-solid border-2 rounded-xl bg-transparent p-2  text-center border-[rgba(245,245,245,1)]"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-2 text-white font-bold">
                <button
                  onClick={() => {
                    onSubmit();
                  }}
                  className="px-5 py-3 gap-2 flex justify-center items-center rounded-xl w-[296px] bg-[rgba(178,186,255,1)]"
                >
                  <p className="m-0 text-[15px] leading-[normal]">Continue </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`text-white font-['Poppins']`}>
          <div className="absolute top-20 flex flex-col items-start left-[120px] gap-[148px]">
            <div className="w-[79px] h-[79px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/8909a2b56ce7956a2f506f0d82b495948a1ff915.webp)_center_/_cover]" />
            <div className="gap-6 flex flex-col items-start">
              <div className="flex flex-col items-center gap-[18px]">
                <div className="gap-[27px]">
                  <div className="flex flex-col items-start gap-[13px]">
                    <p className="text-lg font-medium m-0 leading-[normal]">
                      Congratulations!
                    </p>
                    <p className="font-semibold m-0 w-[436px] text-[32px] leading-[normal]">
                      Company XYZ is inviting you to take an interview
                    </p>
                  </div>
                </div>
                <div className="gap-2 flex flex-col items-start font-medium w-[435px]">
                  <p className="text-lg m-0 leading-[normal]">
                    Skills being assessed:
                  </p>
                  <div className="gap-2 flex items-start">
                    <div className="gap-2.5 flex items-start p-2.5 w-[71px] rounded-[50px] [box-shadow:0px_0px_0px_1px_white_inset] [box-shadow-width:1px]">
                      <p className="text-lg m-0 leading-[normal]">UI/UX</p>
                    </div>
                    <div className="gap-2.5 flex items-start p-2.5 w-[158px] overflow-clip rounded-[50px] [box-shadow:0px_0px_0px_1px_white_inset] [box-shadow-width:1px]">
                      <p className="text-lg m-0 leading-[normal]">
                        Product Design
                      </p>
                    </div>
                    <div className="gap-2.5 flex items-start p-2.5 w-[169px] rounded-[50px] [box-shadow:0px_0px_0px_1px_white_inset] [box-shadow-width:1px]">
                      <p className="text-lg m-0 leading-[normal]">
                        Motion Graphics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg font-medium m-0 leading-[normal]">
                Don’t be nervous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
