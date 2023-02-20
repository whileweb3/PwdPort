import React from "react";
import { EncodeResultType } from "./CustomTypes";
import Logo from "./logo.png";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./customToast.css";

function OuputFrame(props: EncodeResultType) {
  const notify = (msg: string) => {
    toast(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
  };

  const handleCopy = async (text: string) => {
    if (text === "") return;

    try {
      await navigator.clipboard.writeText(text);
      notify("Copied!");
    } catch (e) {
      notify((e as Error).message);
    }
  };

  return (
    <div
      id="pwdResult"
      className="h-[520px] w-[400px] rounded-lg border-2 border-violet-300 bg-gray-800 p-8 shadow-md shadow-cyan-100"
    >
      <div className="flex flex-row justify-center gap-2">
        <img src={Logo} width={30}></img>
        <h1 className="block cursor-default text-3xl font-medium text-white">
          PwdPort
        </h1>
      </div>
      <div className="relative cursor-default py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-gray-400"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gray-800 px-4 text-sm font-medium text-gray-400">
            Encoded
          </span>
        </div>
      </div>
      <div id="defaultPwd">
        <span className="text-md mt-5 mb-1 block cursor-default text-left font-medium text-white">
          Default Password
        </span>
        <span
          id="defaultPwdRes"
          onClick={() => handleCopy(props.default)}
          className={`inline-block w-full ${
            props.issueTime === ""
              ? "animate-pulse cursor-default rounded-lg bg-slate-700 text-slate-700 shadow shadow-slate-800"
              : "cursor-pointer text-violet-400"
          } py-0.5 text-left text-xl`}
        >
          {props.issueTime === "" ? "temp" : props.default}
        </span>
      </div>
      <div id="advancedPwd">
        <span className="text-md mt-8 mb-1 block cursor-default text-left font-medium text-white">
          Advanced Password
        </span>
        <span
          id="advancedPwdRes"
          onClick={() => handleCopy(props.advanced)}
          className={`inline-block w-full break-all ${
            props.issueTime === ""
              ? "animate-pulse cursor-default rounded-lg bg-slate-700 text-slate-700 shadow shadow-slate-800"
              : "cursor-pointer text-violet-400"
          } py-0.5 text-left text-xl`}
        >
          {props.issueTime === "" ? "temp" : props.advanced}
        </span>
      </div>
      <div id="specialPwd">
        <span className="text-md mt-8 mb-1 block cursor-default text-left font-medium text-white">
          Special Password
        </span>
        <span
          id="specialPwdRes"
          onClick={() => handleCopy(props.special)}
          className={`inline-block w-full break-all ${
            props.issueTime === ""
              ? "animate-pulse cursor-default rounded-lg bg-slate-700 text-slate-700 shadow shadow-slate-800"
              : "cursor-pointer text-violet-400"
          } py-0.5 text-left text-xl`}
        >
          {props.issueTime === "" ? "temp" : props.special}
        </span>
      </div>
      <div id="issueTime">
        <span className="mt-14 block cursor-default text-left text-sm font-medium text-white">
          Issue Time
        </span>
        <span
          id="issueTimeRes"
          className={`mt-1 inline-block w-full ${
            props.issueTime === ""
              ? "animate-pulse rounded-lg bg-slate-700 text-slate-700 shadow shadow-slate-800"
              : "text-violet-400"
          } cursor-default py-0.5 text-left text-sm`}
        >
          {props.issueTime === "" ? "temp" : props.issueTime}
        </span>
      </div>
      <ToastContainer />
    </div>
  );
}

export default OuputFrame;