// app/details/page.jsx
import { Suspense } from "react";
import DetailsClient from "./DetailsClient";

export default function DetailsPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading weather details...</div>}>
      <DetailsClient />
    </Suspense>
  );
}
