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
    <main className="p-5 flex justify-center flex-col text-center gap-5">
      <h1> انتخاب دسته‌بندی</h1>
      <button> تصادفی</button>
      <section>
        <Dialog>
          <DialogTrigger>{wordData.word}</DialogTrigger>
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
