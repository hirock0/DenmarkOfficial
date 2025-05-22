"use client";

import HeadLineSlide from "@/components/headLineSlide/HeadLineSlide";
import OrderCard from "@/components/(user_dashboard)/orderCard/OrderCard";
const DashboardPage = () => {
  const cards = [
    {
      count: 26,
      title: "টোটাল পেন্ডিং অর্ডার",
      buttonText: "টোটাল পেন্ডিং অর্ডার",
    },
    { count: 26, title: "টোটাল অর্ডার", buttonText: "টোটাল অর্ডার" },
    { count: 26, title: "টোটাল ডেলিভারি", buttonText: "টোটাল ডেলিভারি" },
    {
      count: 26,
      title: "টোটাল বায়োমেট্রিক অর্ডার",
      buttonText: "টোটাল বায়োমেট্রিক অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল ডিলিট অর্ডার",
      buttonText: "টোটাল ডিলিট অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
    {
      count: 26,
      title: "টোটাল না পাওয়া অর্ডার",
      buttonText: "টোটাল না পাওয়া অর্ডার",
    },
  ];

  return (
    <div className=" max-w-[1440px] w-11/12 mx-auto ">
      <div className=" ">
        <HeadLineSlide headline={["This is a", "Thus sds", "dsfd  sad"]} />
      </div>

      <div className=" w-full grid gap-6  max-lg:grid-cols-2 grid-cols-3 max-sm:grid-cols-1">
        {cards?.map((card, index) => (
          <OrderCard
            key={index}
            count={card.count}
            title={card.title}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
