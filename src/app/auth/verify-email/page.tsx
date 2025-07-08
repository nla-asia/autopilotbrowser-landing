import React, { Suspense } from "react";
import VerifyEmailClient from "./VerifyEmailClient";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", marginTop: 40 }}>Loading...</div>}>
      <VerifyEmailClient />
    </Suspense>
  );
}
