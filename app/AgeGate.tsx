"use client";

import { useEffect, useState } from "react";

export default function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("nightrank-age-ok");

    if (!accepted) {
      setShow(true);
    }
  }, []);

  function enterSite() {
    localStorage.setItem("nightrank-age-ok", "true");
    setShow(false);
  }

  function leaveSite() {
    window.location.href = "https://www.google.com";
  }

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md px-6">
      <div className="max-w-lg w-full bg-zinc-950 border border-pink-600 rounded-3xl p-8 text-center shadow-2xl">
        <div className="text-6xl mb-5">🔞</div>

        <h2 className="text-3xl font-bold text-pink-500 mb-4">
          Réservé aux adultes
        </h2>

        <p className="text-gray-300 mb-6">
          Ce site contient du contenu destiné uniquement aux personnes âgées de
          18 ans et plus. En entrant, vous confirmez avoir l’âge légal dans
          votre pays ou province.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={enterSite}
            className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-xl font-bold"
          >
            J’ai 18 ans ou plus
          </button>

          <button
            onClick={leaveSite}
            className="border border-zinc-700 hover:bg-zinc-900 px-8 py-3 rounded-xl font-bold"
          >
            Quitter
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          NightRank AI — contenu réservé aux adultes 18+
        </p>
      </div>
    </div>
  );
}