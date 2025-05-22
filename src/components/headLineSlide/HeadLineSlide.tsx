import Marquee from "react-fast-marquee";
const HeadLineSlide = ({ headline }: any) => {
  return (
    <div className=" w-full  h-full  ">
      <div className=" bg-zinc-100/40  max-w-[1400px]  w-[98%] mx-auto py-2 rounded-md">
        <Marquee>
          <div className=" flex items-center text-2xl text-blue-500 gap-5">
            {headline?.map((item: any, index: any) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HeadLineSlide;
