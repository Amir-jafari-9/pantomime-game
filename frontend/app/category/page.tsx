"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

interface WordData {
  word: string;
  // Define other properties if present in the actual response data
}

const Page = () => {
  const [wordData, setWordData] = useState<WordData>({ word: "" });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/v1/word");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setWordData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <main className="p-5 flex justify-center flex-col text-center gap-16 bg-black h-screen bg-gradient-to-b from-purple-300 to-purple-50">
      <div className="flex flex-col gap-5">
        <h1 className="text-purple-800"> دسته‌بندی خودت رو انتخاب کن </h1>
        <p></p>
        <button className="bg-white border-2 border-purple-800 text-purple-800 p-4 py-2.5 rounded-xl font-semibold">
          {" "}
          انتخاب تصادفی{" "}
        </button>
      </div>
      <section className="flex flex-wrap gap-4 justify-center">
        <Dialog>
          <DialogTrigger>
            {" "}
            <button className="bg-white border-2 border-purple-800 text-purple-800 p-5 rounded-2xl font-semibold">
              {" "}
              احساسات{" "}
            </button>{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle> انتخاب سطح</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-5 p-5">
                  <button> </button>
                  <button> سطح ۲</button>
                  <button> سطح ۳</button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            {" "}
            <button className="bg-white border-2 border-purple-800 text-purple-800 p-5 rounded-2xl font-semibold">
              {" "}
              شخصیت{" "}
            </button>{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {" "}
                <p className="font-bold py-2 text-purple-800">
                  {" "}
                  سطح کلمه{" "}
                </p>{" "}
              </DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-5 p-5">
                  <Link href="../game"> آسون (۳ امتیاز) </Link>
                  <button> متوسط (۵ امتیاز)</button>
                  <button> سخت (۷ امتیاز)</button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            {" "}
            <button className="bg-white border-2 border-purple-800 text-purple-800 p-5 rounded-2xl font-semibold">
              {" "}
              مکان{" "}
            </button>{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle> انتخاب سطح</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-5 p-5">
                  <button> سطح ۱</button>
                  <button> سطح ۲</button>
                  <button> سطح ۳</button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            {" "}
            <button className="bg-white border-2 border-purple-800 text-purple-800 p-5 rounded-2xl font-semibold">
              {" "}
              شغل{" "}
            </button>{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle> انتخاب سطح</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-5 p-5">
                  <button> سطح ۱</button>
                  <button> سطح ۲</button>
                  <button> سطح ۳</button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            {" "}
            <button className="bg-white border-2 border-purple-800 text-purple-800 p-5 rounded-2xl font-semibold">
              {" "}
              حیوان{" "}
            </button>{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle> انتخاب سطح</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-5 p-5">
                  <button> سطح ۱</button>
                  <button> سطح ۲</button>
                  <button> سطح ۳</button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            {" "}
            <button className="bg-white border-2 border-purple-800 text-purple-800 p-5 rounded-2xl font-semibold">
              {" "}
              غذا
            </button>{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle> انتخاب سطح</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-5 p-5">
                  <button> سطح ۱</button>
                  <button> سطح ۲</button>
                  <button> سطح ۳</button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            {" "}
            <button className="bg-white border-2 border-purple-800 text-purple-800 p-5 rounded-2xl font-semibold">
              {" "}
              فعالیت
            </button>{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle> انتخاب سطح</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-5 p-5">
                  <button> سطح ۱</button>
                  <button> سطح ۲</button>
                  <button> سطح ۳</button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            {" "}
            <button className="bg-white border-2 border-purple-800 text-purple-800 p-5 rounded-2xl font-semibold">
              {" "}
              اشیا
            </button>{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle> انتخاب سطح</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-5 p-5">
                  <button> سطح ۱</button>
                  <button> سطح ۲</button>
                  <button> سطح ۳</button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
};

export default Page;
