import Table from "@/components/Table";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function TableView() {
    const router = useRouter();

const [user, setUser] = useState(null);
const [table,settable] = useState(true);
const [data, setData] = useState(null);
useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://frontendtestapi.staging.fastjobs.io/auth/me",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (response.ok) {
        const userData = await response.json();
        console.log(userData)
        setUser(userData);
        

      } else {
       router.push("/");
      }
    } catch (error) {
      console.error(error);
      router.push("/")
    }
      fetchUser();
  };},[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://frontendtestapi.staging.fastjobs.io/data",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.ok) {
          const datatable = await response.json();
          // console.log(datatable);
          setData(datatable);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error(error);
        router.push("/");
      }
    };
    fetchData();
  }, []);

console.log(data)

  return (
    <div>
      <div className="relative bg-white text-left w-[1440px] h-[1024px] ">
        <div>
          <div className="h-2 absolute rounded-bl-[5px] rounded-br-[5px] w-[270px] left-[1642px] top-[223px] bg-[rgba(204,204,204,1)]" />
        </div>
        <div>
          <div className="absolute rounded-tl-[5px] rounded-tr-[5px] w-[270px] h-[34px] left-[1698px] top-[228px] bg-[rgba(204,204,204,1)]">
            <div className="py-0.5 absolute bg-white flex items-start pl-[7px] pr-[9px] left-[5px] top-[7.5px] rounded-[10px]">
              <div className="relative w-[159.72px] h-[16.8px] ">
                <div className="w-2 h-2 left-0 absolute top-[calc(50%_-_4px_+_-0.01px)] bg-[rgba(109,116,117,1)] rounded-[99px]" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-20 top-20 gap-6 flex flex-col items-start w-[1132px] h-[314px]">
            <div
              className={`font-semibold font-['Inter'] text-[rgba(54,58,61,1)]`}
            >
              <div className="gap-6 w-[1139px]">
                <div className="gap-6 flex items-center w-[1139px] pr-[743px]">
                  <div className="gap-2 flex justify-center items-center w-[317px]">
                    <p className="m-0 text-[32px] leading-[normal]">
                      Graphic Designer
                    </p>
                    <div className="w-10 [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/a63719dcabfb7215c4dd3bc75a405b0297dac9bf.webp)_center_/_cover]" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="gap-px flex flex-col items-start w-[1139px] h-[250px]">
                <div>
                  <div className="bg-white flex flex-col items-start h-[262px]">
                    <div className={`gap-2 h-[38px] font-['Inter']`}>
                      <div className="relative w-[1132px] h-[38px]">
                        <div className="absolute left-0 gap-4 inline-flex items-start font-semibold top-[0.5px] text-[rgba(54,58,61,1)]">
                          <div
                            onClick={() => {
                              settable(true);
                            }}
                            className="px-2 py-2.5  gap-2 flex items-center w-[106px]"
                          >
                            <div className="w-3 h-3">
                              <svg
                                width="100%"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_11_91)">
                                  <path
                                    d="M 10.125 0 H 1.875 C 1.378 0 0.901 0.198 0.549 0.549 C 0.198 0.901 0 1.378 0 1.875 V 10.125 C 0 10.622 0.198 11.099 0.549 11.451 C 0.901 11.803 1.378 12 1.875 12 H 10.125 C 10.622 12 11.099 11.803 11.451 11.451 C 11.803 11.099 12 10.622 12 10.125 V 1.875 C 12 1.378 11.803 0.901 11.451 0.549 C 11.099 0.198 10.622 0 10.125 0 Z M 1.875 0.75 H 10.125 C 10.423 0.75 10.71 0.869 10.921 1.08 C 11.132 1.29 11.25 1.577 11.25 1.875 V 3 H 0.75 V 1.875 C 0.75 1.577 0.869 1.29 1.08 1.08 C 1.29 0.869 1.577 0.75 1.875 0.75 Z M 0.75 10.125 V 3.75 H 3.75 V 11.25 H 1.875 C 1.577 11.25 1.29 11.132 1.08 10.921 C 0.869 10.71 0.75 10.423 0.75 10.125 Z M 10.125 11.25 H 4.5 V 3.75 H 11.25 V 10.125 C 11.25 10.423 11.132 10.71 10.921 10.921 C 10.71 11.132 10.423 11.25 10.125 11.25 Z M 1.5 4.875 C 1.5 4.776 1.54 4.68 1.61 4.61 C 1.68 4.54 1.776 4.5 1.875 4.5 H 2.625 C 2.724 4.5 2.82 4.54 2.89 4.61 C 2.96 4.68 3 4.776 3 4.875 C 3 4.974 2.96 5.07 2.89 5.14 C 2.82 5.21 2.724 5.25 2.625 5.25 H 1.875 C 1.776 5.25 1.68 5.21 1.61 5.14 C 1.54 5.07 1.5 4.974 1.5 4.875 Z M 3 7.125 C 3 7.224 2.96 7.32 2.89 7.39 C 2.82 7.46 2.724 7.5 2.625 7.5 H 1.875 C 1.776 7.5 1.68 7.46 1.61 7.39 C 1.54 7.32 1.5 7.224 1.5 7.125 C 1.5 7.026 1.54 6.93 1.61 6.86 C 1.68 6.79 1.776 6.75 1.875 6.75 H 2.625 C 2.724 6.75 2.82 6.79 2.89 6.86 C 2.96 6.93 3 7.026 3 7.125 Z M 3 9.375 C 3 9.474 2.96 9.57 2.89 9.64 C 2.82 9.71 2.724 9.75 2.625 9.75 H 1.875 C 1.776 9.75 1.68 9.71 1.61 9.64 C 1.54 9.57 1.5 9.474 1.5 9.375 C 1.5 9.276 1.54 9.18 1.61 9.11 C 1.68 9.04 1.776 9 1.875 9 H 2.625 C 2.724 9 2.82 9.04 2.89 9.11 C 2.96 9.18 3 9.276 3 9.375 Z M 10.5 4.875 C 10.5 4.974 10.461 5.07 10.39 5.14 C 10.32 5.21 10.225 5.25 10.125 5.25 H 5.625 C 5.526 5.25 5.43 5.21 5.36 5.14 C 5.29 5.07 5.25 4.974 5.25 4.875 C 5.25 4.776 5.29 4.68 5.36 4.61 C 5.43 4.54 5.526 4.5 5.625 4.5 H 10.125 C 10.225 4.5 10.32 4.54 10.39 4.61 C 10.461 4.68 10.5 4.776 10.5 4.875 Z M 10.5 7.125 C 10.5 7.224 10.461 7.32 10.39 7.39 C 10.32 7.46 10.225 7.5 10.125 7.5 H 5.625 C 5.526 7.5 5.43 7.46 5.36 7.39 C 5.29 7.32 5.25 7.224 5.25 7.125 C 5.25 7.026 5.29 6.93 5.36 6.86 C 5.43 6.79 5.526 6.75 5.625 6.75 H 10.125 C 10.225 6.75 10.32 6.79 10.39 6.86 C 10.461 6.93 10.5 7.026 10.5 7.125 Z M 10.5 9.375 C 10.5 9.474 10.461 9.57 10.39 9.64 C 10.32 9.71 10.225 9.75 10.125 9.75 H 5.625 C 5.526 9.75 5.43 9.71 5.36 9.64 C 5.29 9.57 5.25 9.474 5.25 9.375 C 5.25 9.276 5.29 9.18 5.36 9.11 C 5.43 9.04 5.526 9 5.625 9 H 10.125 C 10.225 9 10.32 9.04 10.39 9.11 C 10.461 9.18 10.5 9.276 10.5 9.375 Z"
                                    fill="#363A3D"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_11_91">
                                    <rect width="12" height="12" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <p className="text-sm m-0 leading-[normal]">
                              Table view
                            </p>
                          </div>
                          <div
                            onClick={() => {
                              settable(false);
                            }}
                            className="px-2 py-2.5 gap-2 flex items-center w-[89px]"
                          >
                            <div className="w-3.5 h-3.5">
                              <svg
                                width="100%"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M 10.634 1 H 3.366 C 2.059 1 1 2.059 1 3.366 V 10.634 C 1 11.941 2.059 13 3.366 13 H 10.634 C 11.941 13 13 11.941 13 10.634 V 3.366 C 13 2.059 11.941 1 10.634 1 Z"
                                  fill="white"
                                  stroke="#363A3D"
                                />
                                <path
                                  d="M 8.986 4.909 H 10.658 C 10.832 4.909 10.972 4.769 10.972 4.596 V 3.76 C 10.972 3.587 10.832 3.446 10.658 3.446 H 8.986 C 8.813 3.446 8.672 3.587 8.672 3.76 V 4.596 C 8.672 4.769 8.813 4.909 8.986 4.909 Z"
                                  fill="#363A3D"
                                />
                                <path
                                  d="M 8.986 6.791 H 10.658 C 10.832 6.791 10.972 6.65 10.972 6.477 V 5.641 C 10.972 5.468 10.832 5.328 10.658 5.328 H 8.986 C 8.813 5.328 8.672 5.468 8.672 5.641 V 6.477 C 8.672 6.651 8.813 6.791 8.986 6.791 Z"
                                  fill="#363A3D"
                                />
                                <path
                                  d="M 8.986 8.672 H 10.658 C 10.832 8.672 10.972 8.532 10.972 8.359 V 7.523 C 10.972 7.349 10.832 7.209 10.658 7.209 H 8.986 C 8.813 7.209 8.672 7.35 8.672 7.523 V 8.359 C 8.672 8.532 8.813 8.672 8.986 8.672 Z"
                                  fill="#363A3D"
                                />
                                <path
                                  d="M 6.164 4.909 H 7.836 C 8.009 4.909 8.15 4.769 8.15 4.596 V 3.76 C 8.15 3.587 8.009 3.446 7.836 3.446 H 6.164 C 5.991 3.446 5.85 3.587 5.85 3.76 V 4.596 C 5.85 4.769 5.99 4.909 6.164 4.909 Z"
                                  fill="#363A3D"
                                />
                                <path
                                  d="M 6.164 6.791 H 7.836 C 8.009 6.791 8.15 6.65 8.15 6.477 V 5.641 C 8.15 5.468 8.009 5.328 7.836 5.328 H 6.164 C 5.991 5.328 5.85 5.468 5.85 5.641 V 6.477 C 5.85 6.651 5.99 6.791 6.164 6.791 Z"
                                  fill="#363A3D"
                                />
                                <path
                                  d="M 3.342 4.909 H 5.014 C 5.187 4.909 5.328 4.769 5.328 4.596 V 3.76 C 5.328 3.587 5.187 3.446 5.014 3.446 H 3.342 C 3.169 3.446 3.028 3.587 3.028 3.76 V 4.596 C 3.028 4.769 3.169 4.909 3.342 4.909 Z"
                                  fill="#363A3D"
                                />
                                <path
                                  d="M 3.342 6.791 H 5.014 C 5.187 6.791 5.328 6.65 5.328 6.477 V 5.641 C 5.328 5.468 5.187 5.328 5.014 5.328 H 3.342 C 3.169 5.328 3.028 5.468 3.028 5.641 V 6.477 C 3.028 6.651 3.169 6.791 3.342 6.791 Z"
                                  fill="#363A3D"
                                />
                                <path
                                  d="M 3.342 8.672 H 5.014 C 5.187 8.672 5.328 8.532 5.328 8.359 V 7.523 C 5.328 7.349 5.187 7.209 5.014 7.209 H 3.342 C 3.169 7.209 3.028 7.35 3.028 7.523 V 8.359 C 3.028 8.532 3.169 8.672 3.342 8.672 Z"
                                  fill="#363A3D"
                                />
                                <path
                                  d="M 3.342 10.554 H 5.014 C 5.187 10.554 5.328 10.413 5.328 10.24 V 9.404 C 5.328 9.231 5.187 9.09 5.014 9.09 H 3.342 C 3.169 9.09 3.028 9.231 3.028 9.404 V 10.24 C 3.028 10.413 3.169 10.554 3.342 10.554 Z"
                                  fill="#363A3D"
                                />
                              </svg>
                            </div>
                            <p className="text-sm m-0 leading-[normal]">
                              Kanban
                            </p>
                          </div>
                        </div>
                        <div className="h-6 absolute w-[292.04px] left-[836.96px] top-[7px] gap-[17px]">
                          <div
                            className={`text-white text-left font-medium font-['Inter']`}
                          >
                            <div className="h-6 absolute gap-2 rounded w-[66px] left-[229px] top-[calc(50%_-_12px_+_0px)]">
                              <div className="absolute left-0 top-0 flex justify-center items-center rounded">
                                <div className="rounded-l px-2 py-1 h-6 flex justify-center items-center w-[42px] bg-[rgba(103,118,255,1)]">
                                  <p className="text-xs m-0 leading-[normal]">
                                    New
                                  </p>
                                </div>
                                <div className="h-6 w-[25px]">
                                  <svg
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <mask
                                      id="path-1-inside-1_15_5"
                                      fill="white"
                                    >
                                      <path d="M 0.957 0 H 20.821 C 23.03 0 24.821 1.791 24.821 4 V 20 C 24.821 22.209 23.03 24 20.821 24 H 0.957 V 0 Z" />
                                    </mask>
                                    <path
                                      d="M 0.957 0 H 20.821 C 23.03 0 24.821 1.791 24.821 4 V 20 C 24.821 22.209 23.03 24 20.821 24 H 0.957 V 0 Z"
                                      fill="#6776FF"
                                    />
                                    <path
                                      d="M 12.889 12.726 L 9.804 9.58 L 8.957 10.427 L 12.889 14.42 L 16.821 10.427 L 15.974 9.58 L 12.889 12.726 Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M 0.957 0 H 24.821 H 0.957 Z M 24.821 24 H 0.957 H 24.821 Z M 0.457 24 V 0 H 1.457 V 24 H 0.457 Z M 24.821 0 V 24 V 0 Z"
                                      fill="white"
                                      mask="url(#path-1-inside-1_15_5)"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="absolute text-sm font-normal inline m-0 w-[28.71px] left-[734px] top-[10.5px] leading-[normal] text-[rgba(179,179,179,1)]">
                          Sort
                        </p>
                        <div className="absolute gap-2.5 inline-flex justify-center items-center font-normal w-[134.64px] left-[835.97px] top-[10.5px] text-[rgba(179,179,179,1)]">
                          <div>
                            <div className="h-4 w-[17px]">
                              <svg
                                width="100%"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M 11.922 6.4 C 11.922 8.925 9.752 10.971 7.074 10.971 C 4.396 10.971 2.225 8.925 2.225 6.4 C 2.225 3.875 4.396 1.829 7.074 1.829 C 9.752 1.829 11.922 3.875 11.922 6.4 Z M 10.559 11.893 C 9.54 12.469 8.348 12.8 7.074 12.8 C 3.325 12.8 0.286 9.935 0.286 6.4 C 0.286 2.865 3.325 0 7.074 0 C 10.823 0 13.862 2.865 13.862 6.4 C 13.862 8.071 13.183 9.592 12.07 10.732 L 16.002 14.439 C 16.381 14.796 16.381 15.375 16.002 15.732 C 15.623 16.089 15.009 16.089 14.631 15.732 L 10.559 11.893 Z"
                                  fill="#B3B3B3"
                                />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <input className="text-sm m-0 bg-transparent leading-[normal] w-[110px]" />
                          </div>
                        </div>
                        <p className="absolute text-sm font-normal inline m-0 w-[33.66px] left-[778.55px] top-[10.5px] leading-[normal] text-[rgba(179,179,179,1)]">
                          Filter
                        </p>
                      </div>
                    </div>
                    {table && (
                      <div className="flex flex-col items-start">
                        <div
                          className={`py-1 gap-7 flex items-center font-normal w-[1132px] font-['Inter'] text-[rgba(71,77,79,1)]`}
                        >
                          <div className="px-6 py-2 w-40 gap-2.5 flex items-start">
                            <p className="text-sm m-0 leading-[normal]">
                              First Name
                            </p>
                          </div>
                          <div className="px-6 py-2 w-40 gap-2.5 flex items-start">
                            <p className="text-sm m-0 leading-[normal]">
                              Last Name
                            </p>
                          </div>
                          <div className="px-6 py-2 w-40 gap-2.5 flex items-start">
                            <p className="text-sm m-0 leading-[normal]">
                              Gender
                            </p>
                          </div>
                          <div className="px-6 py-2 w-40 gap-2.5 flex items-start">
                            <p className="text-sm m-0 leading-[normal]">
                              @ Email
                            </p>
                          </div>
                        </div>

                        {data &&
                          data.map((item, index) => (
                            <div
                              key={index}
                              className={
                                index % 2 === 0
                                  ? "py-3 gap-7 flex items-center w-[1132px] bg-[rgba(230,230,230,1)]"
                                  : "py-3 gap-7 flex items-center w-[1132px]  bg-white"
                              }
                            >
                              <div
                                className={`px-6 py-2 w-40 gap-2.5 flex items-start text-black font-medium font-['Inter']`}
                              >
                                <p className="text-sm m-0 leading-[normal]">
                                  {item.first_name}
                                </p>
                              </div>
                              <div
                                className={`px-6 py-2 w-40 gap-2.5 flex items-start font-semibold font-['Inter'] text-[rgba(54,58,61,1)]`}
                              >
                                <p className="text-sm m-0 leading-[normal]">
                                  {item.last_name}
                                </p>
                              </div>
                              <div
                                className={`px-6 py-2 w-40 gap-2.5 flex items-start font-normal font-['Poppins'] text-[rgba(54,58,61,1)]`}
                              >
                                <p className="text-sm m-0 leading-[normal]">
                                  {item?.gender}
                                </p>
                              </div>
                              <div
                                className={`py-2 w-40 pl-6 pr-2.5 gap-2.5 flex items-start font-light font-['Inter'] text-[rgba(54,58,61,1)]`}
                              >
                                <div className="leading-none relative">
                                  <p className="text-xs inline m-0 leading-[normal]">
                                    {item?.email}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                    {!table && data && (
                      <div className="px-20">
                        <Table data={data} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }