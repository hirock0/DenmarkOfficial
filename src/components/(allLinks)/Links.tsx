import { FaBars } from "react-icons/fa";
import { MdOutlineLocalPhone, MdOutlineLanguage } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { FaPowerOff, FaQuestionCircle } from "react-icons/fa";
import { BsCaretLeft } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiFileCopyLine } from "react-icons/ri";
import { FaIdCard } from "react-icons/fa6";
import { BsFingerprint } from "react-icons/bs";
import { MdOutlineMobileScreenShare } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { GiReturnArrow } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import { PiUserCircleGearFill } from "react-icons/pi";
import { BsFillShieldLockFill } from "react-icons/bs";
export const MenuItems = [
  {
    icon: <BsSpeedometer2 />,
    label: "অর্ডার ড্যাশবোর্ড",
    href: "/dashboard",
  },
  { icon: <BsCaretLeft />, label: "ফিরে যান", href: "#" },
  {
    icon: <IoDocumentTextOutline />,
    label: "সাইন কপি অর্ডার",
    href: "/dashboard/sign-copy",
  },
  {
    icon: <RiFileCopyLine />,
    label: "সার্ভার কপি অর্ডার",
    href: "/dashboard/server-copy",
  },
  {
    icon: <FaIdCard />,
    label: "আইডি কার্ড অর্ডার",
    href: "/dashboard/nid-order",
  },

  {
    icon: <BsFingerprint />,
    label: "বায়োমেট্রিক",
    hasSubmenu: true,
    submenu: [
      {
        label: "গ্রামিন (বায়োমেট্রিক)",
        href: "/dashboard/biometric/operator-gp",
      },
      {
        label: "বাংলালিংক (বায়োমেট্রিক)",
        href: "/dashboard/biometric/operator-banglalink",
      },
      {
        label: "রবি/এয়ারটেল (বায়োমেট্রিক)",
        href: "/dashboard/biometric/operator-robi",
      },
      {
        label: "টেলিটক (বায়োমেট্রিক)",
        href: "/dashboard/biometric/operator-teletalk",
      },
    ],
  },

  {
    icon: <FaIdCard />,
    label: "এন,আই,ডি-টু নম্বর",
    hasSubmenu: true,
    submenu: [
      {
        label: "NID To (গ্রামিন নাম্বার)",
        href: "/dashboard/nid-to-number/operator-gp",
      },
      {
        label: "NID To (বাংলালিংক নাম্বার)",
        href: "/dashboard/nid-to-number/operator-banglalink",
      },
      {
        label: "NID To (রবি/এয়ারটেল নাম্বার)",
        href: "/dashboard/nid-to-number/operator-robi",
      },
      {
        label: "NID To (টেলিটক নাম্বার)",
        href: "/dashboard/nid-to-number/operator-teletalk",
      },
    ],
  },

  {
    icon: <MdOutlineLocalPhone />,
    label: "কল লিস্ট অর্ডার",
    hasSubmenu: true,
    submenu: [
      {
        label: "কল লিস্ট (৩ মাসের)",
        href: "/dashboard/call-list/order-month-3",
      },
      {
        label: "কল লিস্ট (৬ মাসের)",
        href: "/dashboard/call-list/order-month-6",
      },
    ],
  },

  {
    icon: <TfiLocationPin />,
    label: "লোকেশন",
    hasSubmenu: true,
    submenu: [
      { label: "গ্রামিন (লোকেশন)", href: "/dashboard/location/operator-gp" },
      {
        label: "বাংলালিংক (লোকেশন)",
        href: "/dashboard/location/operator-banglalink",
      },
      {
        label: "রবি/এয়ারটেল (লোকেশন)",
        href: "/dashboard/location/operator-robi",
      },
    ],
  },

  {
    icon: <MdOutlineMobileScreenShare />,
    label: "বিকাশ ইনফো",
    hasSubmenu: true,
    submenu: [
      {
        label: "বিকাশ (ইনফরমেশন)",
        href: "/dashboard/bikash-info/operator-bikash",
      },
      {
        label: "নগদ (ইনফরমেশন)",
        href: "/dashboard/bikash-info/operator-nagad",
      },
      {
        label: "রকেট (ইনফরমেশন)",
        href: "/dashboard/bikash-info/operator-rocket",
      },
    ],
  },

  {
    icon: <GiReturnArrow />,
    label: "জিরো রিটার্ন দাখিল",
    href: "/dashboard/zero-return",
  },
  {
    icon: <FaUserCheck />,
    label: "ইউজার পাস সেট",
    href: "/dashboard/user-pass",
  },
  {
    icon: <GiHomeGarage />,
    label: "রিচার্জ",
    href: "/dashboard/topup",
  },
];

export const Settings = [
  {
    icon: <PiUserCircleGearFill />,
    label: "প্রোফাইল",
    href: "/dashboard/profile",
  },
  { icon: <BsFillShieldLockFill />, label: "পাসওয়ার্ড পরিবর্তন", href: "#" },
  { icon: <FaQuestionCircle />, label: "সাপোর্ট", href: "#" },
  { icon: <FaPowerOff />, label: "Logout", href: "#" },
];
