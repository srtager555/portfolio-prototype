import Head from "next/head";

interface props {
  children: children;
  title?: string;
  desc?: string;
  image?: string;
}

export function Helmet(props: props) {
  const {
    children,
    title = "Carlos Ponce - Portfolio",
    desc = "This is my Portfolio prototype, it is simple but it fulfills its purpose",
    image = "https://i.ibb.co/SsX859q/portfolio-image.png",
  } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="application-name" content="Carlos && Ponce - Portfolio prototype" />
        <meta name="author" content="Carlos && Ponce" />
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://ttager.page" />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={desc} />
        <meta property="og:site_name" content="Carlos Ponce | Portfolio" />
      </Head>
      {children}
    </>
  );
}
