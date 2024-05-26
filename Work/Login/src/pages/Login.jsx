import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import {LoginSocialButton } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

const Page = () => {
  return (
    <GoogleOAuthProvider clientId="327719927064-isqrtstnfc63k8uaa1qiebm9iji555n7.apps.googleusercontent.com">
      <div className="w-full h-[906px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] mq450:h-auto mq450:min-h-[906px]">
        <main className="absolute top-[143px] left-[0px] w-[1010px] flex flex-row items-start justify-end max-w-full text-center text-[32px] text-darkslategray font-poppins">
          <div className="w-[600px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[32px] max-w-full">
            <h1 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[94px] whitespace-nowrap mq450:text-[19px] mq750:text-[26px]">
              Log in
            </h1>
            <form className="m-0 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
                  <div className="relative text-base font-poppins text-dimgray-100 text-left">
                    Email address or user name
                  </div>
                </div>
                <input
                  className="[outline:none] bg-[transparent] self-stretch h-14 relative rounded-xl box-border overflow-hidden shrink-0 min-w-[250px] border-[1px] border-solid border-dimgray-300"
                  type="text"
                />
                <div className="w-[101px] relative text-sm font-poppins text-crimson text-left hidden">
                  Error message
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[9px] pl-0 gap-[20px] mq450:flex-wrap">
                    <div className="relative text-base font-poppins text-dimgray-100 text-left inline-block min-w-[77px]">
                      Password
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/icon-1.svg"
                        />
                      </div>
                      <div className="relative text-lg font-poppins text-dimgray-200 text-right inline-block min-w-[41px]">
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="[outline:none] bg-[transparent] self-stretch h-14 relative rounded-xl box-border overflow-hidden shrink-0 min-w-[250px] border-[1px] border-solid border-dimgray-300"
                    type="password"
                  />
                  <div className="w-[101px] relative text-sm font-poppins text-crimson text-left hidden">
                    Error message
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-2 pr-7 pl-0 gap-[8px]">
                  <input
                    className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    type="checkbox"
                  />
                  <div className="relative text-base font-poppins text-darkslategray text-left inline-block min-w-[120px]">
                    Remember me
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                <div className="flex flex-row items-start justify-start py-2 pr-5 pl-0 box-border max-w-full">
                  <div className="relative text-base font-poppins text-left shrink-0">
                    <span className="text-darkslategray">{`By continuing, you agree to the `}</span>
                    <span className="[text-decoration:underline] text-gray">
                      Terms of use
                    </span>
                    <span className="text-dimgray-100">{` `}</span>
                    <span className="text-darkslategray">and</span>
                    <span className="text-dimgray-100">{` `}</span>
                    <span className="[text-decoration:underline]">
                      <span className="text-gray">Privacy Policy.</span>
                      <span className="text-dimgray-100">{` `}</span>
                    </span>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-[15px] px-5 pb-4 bg-gray self-stretch rounded-[32px] overflow-hidden flex flex-row items-start justify-center opacity-[0.25]">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                    <div className="relative text-[22px] font-medium font-poppins text-white text-center inline-block min-w-[65px] whitespace-nowrap mq450:text-lg">
                      Log in
                    </div>
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <div className="flex flex-row items-start justify-start p-0.5">
                  <u className="relative text-base [text-decoration:underline] font-medium font-poppins text-gray text-left">
                    Forget your password
                  </u>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <div className="flex flex-row items-start justify-start p-0.5">
                  <div className="relative text-base text-left whitespace-nowrap">
                    <span className="font-poppins text-dimgray-100">{`Don’t have an acount? `}</span>
                    <span className="[text-decoration:underline] font-medium font-poppins text-gray whitespace-pre-wrap">{`Sign up  `}</span>
                  </div>
                </div>
              </div>
            </form>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-[20px] text-gray font-avenir">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[23px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border min-w-[124px]">
                  <div className="self-stretch h-0.5 relative bg-dimgray-400" />
                </div>
                <div className="relative mq450:text-base">Or continue with</div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border min-w-[124px]">
                  <div className="self-stretch h-0.5 relative bg-dimgray-400" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <div className="w-[245px] flex flex-row items-start justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <img
                      className="w-8 h-8 relative"
                      loading="lazy"
                      alt=""
                      src="/social-media-logo.svg"
                    />
                  </div>
                  <img
                    className="h-[42px] w-[42px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/social-media-logo-1.svg"
                  />
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                    render={({ onClick }) => (
                      <div
                        onClick={onClick}
                        className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 cursor-pointer"
                      >
                        <img
                          className="w-8 h-8 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt="Google Login"
                          src="/social-media-logo.svg"
                        />
                      </div>
                    )}
                  />
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <img
                      className="w-7 h-7 relative"
                      loading="lazy"
                      alt=""
                      src="/social-media-logo-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Page;
