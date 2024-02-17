import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const page = () => {
  return (
    <main className="p-5 flex justify-center flex-col text-center gap-5">
      <h1> انتخاب دسته‌بندی</h1>
      <button> تصادفی</button>
      <section>
        <Dialog>
          <DialogTrigger> غذاها</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle> انتخاب سطح</DialogTitle>
              <DialogDescription >
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

export default page;
