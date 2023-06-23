import Head from "next/head";

interface props {
  children: children;
}

export function Helmet({ children }: props) {
  return (
    <>
      <Head>
        <title>Carlos Ponce - Portfolio</title>
      </Head>
      {children}
    </>
  );
}
