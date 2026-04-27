"use client";

import Header from "./components/Header";
import Info from "./components/Info";
import DirectionsAndIngre from "./components/DirectionsAndIngre";
import SubmitBtn from "./components/SubmitBtn";
import action from "./action";
import { useActionState } from "react";
import Form from "next/form";

export default function Home() {
  const [state, formAction, isPending] = useActionState(action, {
    message: "",
  });

  return (
    <div className="flex flex-col flex-1 font-[schoolbell] text-black">
      <main>
        <Form action={formAction} className="space-y-10">
          <Header />
          <Info />
          <DirectionsAndIngre />
          <SubmitBtn isPending={isPending} />
        </Form>

        {state.message && <p>{state.message}</p>}
      </main>
    </div>
  );
}
