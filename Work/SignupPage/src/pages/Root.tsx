import { FunctionComponent } from "react";

const Root: FunctionComponentRootType = () => {
  return (
    <div className="w-full h-[1024px] relative bg-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq450:h-auto mq450:min-h-[1024]">
      <img
        className="w-[1440px] relative max-h-full overflow-hidden shrink-0 object-cover hidden max-w-full z-[0]"
        alt=""
        src="/image@2x.png"
      />
      <main className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white overflow-hidden flex flex-col items-end justify-start pt-12 pb-[78px] pr-[362px] pl-12 box-border gap-[72px] max-w-full z-[1] text-left text-base text-dimgray-100 font-poppins mq450:gap-[18px] mq450:pr-5 mq450:box-border mq750:gap-[36px] mq750:pl-6 mq750:pr-[181px] mq750:box-border">
        <section className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-[32px] text-darkslategray font-poppins">
          <div className="h-[123px] w-[824.5px] relative max-w-full">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-silver w-12 h-12" />
            <div className="absolute top-[45px] left-[520.5px] flex flex-col items-start justify-start gap-[2px]">
              <h1 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lgi mq750:text-[26px]">
                Create an account
              </h1>
              <div className="flex flex-row items-start justify-start py-0 px-6 text-left text-base text-gray">
                <div className="flex flex-row items-start justify-start p-0.5">
                  <div className="h-6 relative inline-block">
                    <span className="text-darkslategray">
                      Already have an ccount?
                    </span>
                    <span className="text-dimgray-100">{` `}</span>
                    <span className="[text-decoration:underline] whitespace-pre-wrap">{`Log in  `}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[715px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
              <div className="relative">What should we call you?</div>
              <div className="h-[27px] w-[73px] relative hidden text-right text-lg text-dimgray-200">
                <img
                  className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                  alt=""
                />
                <div className="absolute top-[0px] right-[0px]">Hide</div>
              </div>
            </div>
            <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start pt-[13px] px-6 pb-[15px] border-[1px] border-solid border-dimgray-400">
              <input
                className="w-[186px] [border:none] [outline:none] bg-[transparent] h-6 flex flex-row items-start justify-start font-poppins text-base text-dimgray-300"
                placeholder="Enter your profile name"
                type="text"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                alt=""
              />
            </div>
            <div className="w-[101px] relative text-sm text-crimson hidden">
              Error message
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
              <div className="relative">What’s your email?</div>
              <div className="h-[27px] w-[73px] relative hidden text-right text-lg text-dimgray-200">
                <img
                  className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                  alt=""
                />
                <div className="absolute top-[0px] right-[0px]">Hide</div>
              </div>
            </div>
            <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start pt-[13px] px-6 pb-[15px] border-[1px] border-solid border-dimgray-400">
              <input
                className="w-[199px] [border:none] [outline:none] bg-[transparent] h-6 flex flex-row items-start justify-start font-poppins text-base text-dimgray-300"
                placeholder="Enter your email address"
                type="text"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                alt=""
              />
            </div>
            <div className="w-[101px] relative text-sm text-crimson hidden">
              Error message
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[9px] pl-0 gap-[20px] mq450:flex-wrap">
              <div className="relative">Create a password</div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-right text-lg text-dimgray-200">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-2.svg"
                  />
                </div>
                <div className="relative inline-block min-w-[41px]">Hide</div>
              </div>
            </div>
            <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start pt-[13px] px-6 pb-[15px] border-[1px] border-solid border-dimgray-400">
              <input
                className="w-[163px] [border:none] [outline:none] bg-[transparent] h-6 flex flex-row items-start justify-start font-poppins text-base text-dimgray-300"
                placeholder="Enter your password"
                type="text"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                alt=""
              />
            </div>
            <p className="m-0 relative text-sm inline-block max-w-full">{`Use 8 or more characters with a mix of letters, numbers & symbols`}</p>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-gray">
            <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 box-border max-w-full">
              <p className="m-0 relative">
                <span className="text-darkslategray">{`By creating an account, you agree to the `}</span>
                <span className="[text-decoration:underline]">
                  Terms of use
                </span>
                <span className="text-dimgray-100">{` `}</span>
                <span className="text-darkslategray">and</span>
                <span className="text-dimgray-100">{` `}</span>
                <span className="[text-decoration:underline]">
                  <span>Privacy Policy.</span>
                  <span className="text-dimgray-100">{` `}</span>
                </span>
              </p>
            </div>
            <button className="cursor-pointer [border:none] pt-[15px] pb-4 pr-5 pl-[21px] bg-gray self-stretch rounded-21xl overflow-hidden flex flex-row items-start justify-center opacity-[0.25]">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <div className="relative text-3xl font-medium font-poppins text-white text-center mq450:text-lg">
                  Create an account
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="w-[714.5px] flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-[24px] font-avenir">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <h3 className="m-0 h-[33px] relative text-inherit font-normal font-inherit flex items-center mq450:text-lgi">
              OR Continue with
            </h3>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq750:flex-wrap">
              <button className="cursor-pointer pt-[15px] pb-3.5 pr-[39px] pl-10 bg-white flex-1 rounded-21xl box-border overflow-hidden flex flex-row items-start justify-start min-w-[146px] border-[1px] border-solid border-darkslategray">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-8 w-8 relative min-h-[32px]"
                    alt=""
                    src="/social-media-logo.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="relative text-3xl font-avenir text-darkslategray text-left inline-block min-w-[98px] mq450:text-lg">
                      Facebook
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer pt-[15px] pb-4 pr-[54px] pl-[55px] bg-white flex-[0.7931] rounded-21xl box-border overflow-hidden flex flex-row items-start justify-start min-w-[146px] border-[1px] border-solid border-darkslategray mq450:flex-1">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/social-media-logo-1.svg"
                    />
                  </div>
                  <div className="relative text-3xl font-avenir text-darkslategray text-left inline-block min-w-[75px] mq450:text-lg">
                    Google
                  </div>
                </div>
              </button>
              <button className="cursor-pointer pt-3.5 pb-[15px] pr-[57px] pl-[60px] bg-white flex-[0.7397] rounded-21xl box-border overflow-hidden flex flex-row items-start justify-start min-w-[146px] border-[1px] border-solid border-darkslategray mq450:flex-1">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                    alt=""
                    src="/social-media-logo-2.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="relative text-3xl font-avenir text-darkslategray text-left inline-block min-w-[60px] mq450:text-lg">
                      Apple
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Root;
